import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';

import organization from './modules/organization';
import team from './modules/team';
import board from './modules/board';

Vue.use(Vuex);

window.store = new Vuex.Store({
    strict: true,
    modules: {organization, team, board}
});

export default window.store;
