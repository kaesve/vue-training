import Vue from 'vue';
import Router from 'vue-router';

import Twot      from './views/Twot.vue';
import Twotter   from './views/Twotter.vue';
import Twotterer from './views/Twotterer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Twotter
    },
    {
      path: '/twot/:twotId',
      name: 'single twot',
      component: Twot
    },
    {
      path: '/twotterer/:twottererId',
      name: 'twotter author',
      component: Twotterer
    }
  ]
});
