import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/";
const Axios = axios.create({
  baseURL: "http://127.0.0.1:8888/api/private/v1/"
});

//axios 请求拦截
Axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});

Vue.use(VueAxios, Axios);
