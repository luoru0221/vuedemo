import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

const Axios = axios.create({
  baseURL:"http://localhost:8080/YouMall/"
});
Vue.use(VueAxios, Axios);

