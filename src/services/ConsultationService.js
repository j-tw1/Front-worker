import axios from "axios" ;


const GET_ALL_CONSULTAION_BASE_URL = "http://localhost:8081/Consultation/" ;

const GET_CLIENT_CONSULTATION_BASE_URL = "http://localhost:8081/users/"

export const getConsultationList = () => axios.get(GET_ALL_CONSULTAION_BASE_URL + 'getAll');

export const getConsultationByIdOuvrier = (id) => axios.get(`${GET_ALL_CONSULTAION_BASE_URL}ConsultationById?ouvrier5_id=${id}`);

export const getClientByConsultaiton= (id) => axios.get(`${GET_CLIENT_CONSULTATION_BASE_URL}clientConsultation?id=${id}`);

export const ConfirmConsultation = (id) => axios.post(`${GET_ALL_CONSULTAION_BASE_URL}confirm?id=${id}`);







