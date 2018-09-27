const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require('cors');
const httpCodes = require("http-status-codes");

const { NOT_FOUND, BAD_REQUEST, OK, CREATED } = httpCodes;

const shortid = require("shortid");

const app = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let twotterers = [
  { id: 'JdSYM5AKrB', username: "kaesve" },
  { id: 'y5oJS6G7a9', username: "Backsonba" },
  { id: 'y0jFg2wE1D', username: "Bivvyacco" },
  { id: 'LLodXR4Jc6', username: "Boldessi" },
  { id: 'sQy8_TLnfn', username: "TwilightXoxo" },
  { id: 's4Eb4zIubY', username: "Brightfort" },
  { id: 'RPg7HSfFRR', username: "ConfidentWs" },
  { id: 'JmSkjKRXvz', username: "Cundarymd" },
  { id: 'u6tEavjfae', username: "Essencelenm" },
  { id: 'Bts-MfM_4N', username: "Gestarap" },
];
let twots = require("./mock-twots.json");

const byId = (collection, id) => collection.find(item => item.id == id);

let twotterersRoute = express.Router();

twotterersRoute.get("/", (req, res) => res.json(twotterers));
twotterersRoute.get("/:id", (req, res) => {
  let twotterer = byId(twotterers, req.params.id);
  if (twotterer) {
    twotterer = Object.assign({}, twotterer, { twots: twots.filter(p => p.author == twotterer.id) });
    res.json(twotterer);
  }
  else res.status(NOT_FOUND).json();
});

app.use("/twotterers", twotterersRoute);



const validateNewTwot = twot => {
  const violations = {
    message: [],
    author: []
  };


  if (!twot.message) violations.message.push("No message provided.");
  else if (twot.message.length > 255) violations.message.push("Message is too long.");

  if (!twot.author) violations.author.push("No author provided.");
  else if (!byId(twotterers, twot.author)) violations.author.push("Author invalid or unknown");

  const violationCount = violations.message.length
    + violations.author.length;

  return violationCount ? violations : null;
}

const validateTwotUpdate = twot => {
  let violations = {
    id: [],
    likes: [],
    message: [],
    author: [],
    date: []
  };

  const original = byId(twots, twot.id);
  if (!original) violations.push(`Cannot find twot with id "${twot.id}"`);

  
  if (!Array.isArray(twot.likes)) violations.likes.push("Invalid or missing likes");
  else {
    violations.likes.forEach(like => {
      if (!byId(twotterers, like)) violations.likes.push(`Cannot find user with provided id "${like}"`);
    });
  }

  if (!twot.message) violations.message.push("No message provided.");
  else if (twot.message.length > 255) violations.message.push("Message is too long.");

  if (twot.id     && twot.id     != original.id) violations.id.push("You cannot change the id.");
  if (twot.author && twot.author != original.author) violations.author.push("You cannot change the author.");
  if (twot.date   && twot.date   != original.date)   violations.date.push(  "You cannot change the post date.");


  const violationCount = violations.id.length
    + violations.likes.length
    + violations.message.length
    + violations.author.length
    + violations.date.length;

  return violationCount ? violations : null;
}

let twotsRoute = express.Router();

twotsRoute.get("/", (req, res) => res.json(twots));
twotsRoute.post("/", (req, res) => {
  const violations = validateNewTwot(req.body);
  if (violations) return res.status(BAD_REQUEST).json(violations);
  
  const id = shortid();

  const post = { id, likes: [], date: Date.now() };
  const { author, message } = req.body;
  Object.assign(post, { author, message });

  twots.unshift(post);

  res.status(CREATED).json(post);
});
twotsRoute.get("/:id", (req, res) => {
  let twot = byId(twots, req.params.id);
  if (twot) res.json(twot);
  else res.status(NOT_FOUND).json();
});
twotsRoute.put("/:id", (req, res) => {
  let original = byId(twots, req.params.id);

  if (!original) return res.status(NOT_FOUND).json();
  
  const violations = validateTwotUpdate(req.body);
  if (violations) return res.status(BAD_REQUEST).json(violations);
  
  const { likes, message } = req.body;
  Object.assign(original, { likes: Array.from(new Set(likes)), message });

  res.json(original);
});
twotsRoute.delete("/:id", (req, res) => {
  let idx = twots.findIndex(p => p.id == req.params.id);

  if (idx < 0) return res.status(NOT_FOUND).json();
  
  twots.splice(idx, 1);
  res.status(OK).json();
});

app.use("/twots", twotsRoute);




const portArg = process.argv.find(arg => arg.startsWith("--port="));
const port = portArg ? parseInt(portArg.split("=")[1]) : 8888;
app.listen(port);
