import axios from "axios" ;

const RATING_REST_API_BASE_URL = "http://localhost:8081/rating/"


export const addRatingAPICall = ( email_ouvrier,note) => {
    const url = `${RATING_REST_API_BASE_URL}create?email_ouvrier=${email_ouvrier}&note=${note}`;
    
    return axios.post(url);
  };


