import Vue from 'vue';

import api from './api.js';

const data = {
  twots: [],
  twotterers: []
};

const v = new Vue({ data });

export default {
  data,
  methods: {
    updateTwots() {
      return api.getTwots()
        .then(twots => data.twots = twots);
    },
    updateTwotterers() {
      return api.getTwotterers()
        .then(twotterers => data.twotterers = twotterers);
    },

    getTwot(id)      { return data.twots.find(twot => twot.id == id); },
    getTwotterer(id) { return data.twotterers.find(twotterer => twotterer.id == id); },
  }
};