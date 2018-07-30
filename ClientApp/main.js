import Vue from 'vue';
Vue.config.productionTip = false;
new Vue({
    el: '#app-root',
    render: h => h(require('./app/app.vue'))
});
