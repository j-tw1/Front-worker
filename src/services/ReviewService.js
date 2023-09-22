import axios from "axios" ;

const REVIEW_REST_API_BASE_URL = "http://localhost:8081/review/"


export const addReviewAPICall = ( id,commentaire) => {
    const url = `${REVIEW_REST_API_BASE_URL}create?id=${id}&commentaire=${commentaire}`;
    
    return axios.post(url);
  };

