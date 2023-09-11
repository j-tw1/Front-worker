import axios from "axios" ;

const OUVRIER_REST_API_BASE_URL = "http://localhost:8081/users/u"


export const getOuvrierList = () => axios.get(OUVRIER_REST_API_BASE_URL + 'ListOuvrier');





