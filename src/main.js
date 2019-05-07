import Vue from 'vue';
import App from './App.vue';
import "./css/index.css";
import { poem } from "./js/poem.js";
import { move } from "./app.js"
new Vue({
    el: '#app',
    render: h => h(App)
})
new move(poem)