
<template>
  <div>
    <twot-form />

    <pre>
      {{ JSON.stringify(twots, null, 2) }}
    </pre>  

  </div>
</template>

<script>

import store from "../data-store.js";
import TwotForm from "../components/TwotForm.vue";

// Show a list of twots, and a form to send a new twot.

export default {
  components: { TwotForm },
  computed: {
    twots() { return store.data.twots; }
  }
};

</script>

<style>

</style>