import axios from "axios"
import { getToken } from "./AuthService";

const BASE_REST_API_API = 'http://localhost:8081/'




axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = getToken(); 
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });