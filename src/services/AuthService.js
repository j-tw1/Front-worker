import axios from "axios" ;

const AUTH_REST_API_BASE_URL = "http://localhost:8081/api/auth/"


const GET_USER_API_BASE_URL = "http://localhost:8081/users/"

const ADD_CONSULTAION_BASE_URL = "http://localhost:8081/Consultation/"





export const registerClientAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + 'register/client', registerObj);

export const registerOuvrierAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + 'register/ouvrier', registerObj);

export const addConsultationAPICall = (idClient, idOuvrier) => {
  const url = `${ADD_CONSULTAION_BASE_URL}create?client_id=${idClient}&ouvrier_id=${idOuvrier}`;
  
  return axios.post(url);
};

export const loginAPICall = (email,password) => axios.post(AUTH_REST_API_BASE_URL + 'authenticate', {email,password});


export const storeToken = (token) => localStorage.setItem("token",token);

export const storeRole = (role) => localStorage.setItem("role",role) ;

export const getRole = () => localStorage.getItem("role") ;

export const getToken = () => localStorage.getItem("token") ;

export const storeUserDetails = (email, firstname, lastname, pays, phone, ville ,cin) => {
    const userDetails = {
      email,
      firstname,
      lastname,
      pays,
      phone,
      ville,
      cin
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

export const getUserDetails = () => {
  const userDetailsString = localStorage.getItem('userDetails');
  if (userDetailsString) {
    return JSON.parse(userDetailsString);
  }
  return null;
};

export const  handleLogout = async () => {
 

      
       localStorage.clear();
       sessionStorage.clear();
   

};


export const saveLoggedInUser = (email) => sessionStorage.setItem("authenticatedUser",email);

export const isUserLoggedIn = () => {
    const email = sessionStorage.getItem("authenticatedUser"); 
    if(email == null){return false ; }
    else{return true ; }
    
}

export const getLoggedInUser = () =>{
    const email = sessionStorage.getItem("authenticatedUser");
    return email ; 
}

export const isOuvrier = () => {

  if(getRole()=='Ouvrier'){return true ; }
  else {return false ; }
}



  
  
 
