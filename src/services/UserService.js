import axios from "axios" ;

const AUTH_REST_API_BASE_URL = "http://localhost:8081/Users/"

export const getAllClientsAPI = () => axios.get(AUTH_REST_API_BASE_URL + 'users');




