import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

const Axios = axios.create({
  baseURL:"http://127.0.0.1:8888/api/private/v1/"
});

Vue.use(VueAxios, Axios);
