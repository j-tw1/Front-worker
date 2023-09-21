import axios from "axios" ;

const OUVRIER_REST_API_BASE_URL = "http://localhost:8081/users/"


const GET_OUVRIER_REST_API_BASE_URL = "http://localhost:8081/ouvrier/"


export const getOuvrierList = () => axios.get(OUVRIER_REST_API_BASE_URL + 'ListOuvrier');


export const getOuvrierByEmail = (email) => axios.get(`${GET_OUVRIER_REST_API_BASE_URL}getOuvrier?email=${email}`);



export const getOuvrierByIdConsultation = (id) => axios.get(`${GET_OUVRIER_REST_API_BASE_URL}getOuvrierbyid?id=${id}`);


















