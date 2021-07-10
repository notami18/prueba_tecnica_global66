import Vue from 'vue';
import router from './routes/router';
import App from './App.vue';

import store from './store';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');