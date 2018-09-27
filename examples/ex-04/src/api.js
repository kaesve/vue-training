import axios from "axios";

const url = "http://localhost:8888";


const getTwots = () => axios.get(`${url}/twots`)
  .then(response => response.data);

const getTwot = id => axios.get(`${url}/twots/${id}`)
  .then(response => response.data);

const sendTwot = twot => axios.post(`${url}/twots`, twot)
  .then(response => response.data);

const updateTwot = twot => axios.post(`${url}/twots/${twot.id}`, twot)
  .then(response => response.data);



const getTwotterers = () => axios.get(`${url}/twotterers`)
  .then(response => response.data);

const getTwotterer = id => axios.get(`${url}/twotterers/${id}`)
  .then(response => response.data);


export default {
  getTwots,
  getTwot,
  sendTwot,
  updateTwot,
  getTwotterers,
  getTwotterer
};