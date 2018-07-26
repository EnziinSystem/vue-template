import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
import App from '../App.vue';
import router from '../router';
import store from '../store';

import VeeValidate from 'vee-validate';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '../assets/stylesheets/application.scss';

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VeeValidate);

//Sử dụng ActionCable để liên lạc với Backend dùng Websocket, đảm bảo tính realtime
import ActionCable from 'actioncable';
const webSocketProtocol = process.env.NODE_ENV === 'production' ? 'wss' : 'ws';
const url_cable = webSocketProtocol + '://' + window.location.hostname;
const cable = ActionCable.createConsumer(url_cable + '/cable');
Vue.prototype.$cable = cable;

document.addEventListener("DOMContentLoaded", function () {
    const homeApp = new Vue({
        el: '#app',
        router,
        store,
        template: "<App />",
        components: {App}
    });
});
