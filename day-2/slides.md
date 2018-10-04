
<div>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  overflow: hidden;
}

header {
  display: none;
}

.slide-container {
  height: 100vh;
  overflow: auto;
  
  scroll-snap-type: block;
}

.slide {
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  padding: 10vmin;
  background: #efefef;
}

code:not(.sourceCode),
div.sourceCode {
  background: #fff;
  padding: 0.1em 1em;
}
div.sourceCode { padding: 1em; }

aside {
  break-inside: avoid;
}

h2, h3 {
  margin: 1em 0 1.5em;
  text-align: center;
}

h4 {
  text-align: center;
}

img {
  max-width: 90%;
  max-height: 90%;
  display: block;
  margin: auto;
}
</style>
</div>

<main id="main" class="slide-container" markdown>

<section class="slide" markdown>
## Prep

### Links

* Repository: [https://github.com/kaesve/vue-training.git](https://github.com/kaesve/vue-training.git)
* Documentation:
  * Vue: [https://vuejs.org](https://vuejs.org)
  * Vuex: [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
  * Nuxt: [https://nuxtjs.org/guide](https://nuxtjs.org/guide)
* Vue devtools: [https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
* Cheatsheet:
  * [https://vuejs-tips.github.io/cheatsheet/](https://vuejs-tips.github.io/cheatsheet/)
  * [https://www.vuemastery.com/vue-cheat-sheet/](https://www.vuemastery.com/vue-cheat-sheet/)

### Other

* node v8+
* `npm install -g @vue/cli`
* Run `npm install` in `day-2/examples/ex-03` and `day-2/examples/ex-04`

</section>



<section class="slide" markdown>

## Component API

```js

export default {
  components: { },
  props: [ ],
  data() { return { }; },
  computed: { },
  methods: { }
};

```

</section>

<section class="slide" markdown>

  <img src="static/lifecycle.png" />

</section>

<section class="slide" markdown>

## Component API

```js

export default {
  beforeCreated() { },
  created() { },
  
  beforeMount() { },
  mounted() { },
  
  beforeUpdate() { },
  updated() { },
  
  beforeDestroy() { },
  destroyed()  { },

  components, props, data, computed, methods
};

```

</section>


<section class="slide" markdown>

## Twotter back-end

```
> cd server
> npm install
> node index.js
```

</section>




<script>

const container = document.getElementById("main");

const prev = () => container.scrollTop = Math.round(container.scrollTop/window.innerHeight - 1)*window.innerHeight;
const next = () => container.scrollTop = Math.round(container.scrollTop/window.innerHeight + 1)*window.innerHeight;

window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
    case "ArrowLeft": prev(); e.preventDefault(); break;

    case "ArrowDown":
    case "ArrowRight": next(); e.preventDefault(); break;

    case " ":
      e.shiftKey ? prev() : next();
      e.preventDefault();
      break;
  }
});
</script>

</main>