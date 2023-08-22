import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Signup2 from './pages/signup2/Signup2';
import SignupCat from './pages/signup-ouvrier/SignCat';
import LoginComp from './pages/LogRegComponent/LoginComp';
import { Navigate } from 'react-router-dom';
import { getRole, isUserLoggedIn } from './services/AuthService';

import SignUpClient from './pages/SignUp-client/SignUpClient'

import SignUpChoice from './pages/SignUpchoice/signUpChoice'
import SignUpOuvrier from './pages/SignUpOuvrier/signUpOuvrier';
//import LoginComp from './pages/LogRegComponent/LoginComp';



function App() {

  function AuthenticatedUser({children}){

    const isAuth = isUserLoggedIn();
    
    if(isAuth ){
      return children ;

    }
    return <Navigate to="/Signin" />
  }


  function AuthenticatedAdmin({children}){

    const isAuth = isUserLoggedIn();
    
    if(isAuth && getRole()=='ADMIN'){
      return children ;

    }
    return <Navigate to="/Signin" />
  }

  
  function AuthenticatedOuvrier({children}){

    const isAuth = isUserLoggedIn();
    
    if(isAuth && getRole()=='Ouvrier'){
      return children ;

    }
    return <Navigate to="/Signin" />
  }

  function AuthenticatedClient({children}){

    const isAuth = isUserLoggedIn();
    
    if(isAuth && getRole()=='Client'){
      
      return children ;

    }
    return <Navigate to="/Signin" />
  }




  const Layout = () => {
  return (
    <>
    <Navbar/>
    
    <Outlet/>
    </>
    
  );
  };
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {

          path: "/",
          element: <Home />,
          
        },
        {
          path: "/Signup",
          element: <Signup2 />,
        }
       

      ],},
      
      {
        path: "/Signin",
          element: <LoginComp />,
      },

    


      
      {
        path: "/Signupchoice",
          element: <SignUpChoice />,
      },

      {
        path: "/Signup/ouvrier",
          element: <SignUpOuvrier />,
      },


      
      // {
        
      //   path: "/Signup/ouvrier",
      // element:  <AuthenticatedAdmin> <SignupCat /> </AuthenticatedAdmin>,
        
      // },



      // {
        
      //   path: "/Signup/ouvrier",
      // element:  <AuthenticatedAdmin> <SignupCat /> </AuthenticatedAdmin>,
        
      // },
      {
        
        path: "/SignupClient",
      element:   <SignUpClient /> ,
        
      },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
