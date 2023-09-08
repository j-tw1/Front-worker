import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Signup2 from './pages/signup2/Signup2';
import SignupCat from './pages/signup-ouvrier/SignCat';
import LoginComp from './pages/LogRegComponent/LoginComp';
import { Navigate } from 'react-router-dom';
import { getRole, isUserLoggedIn ,isOuvrier } from './services/AuthService';
import OuvrierList from './components/clientComp/listOuvrier/OuvrierList'

import SignUpClient from './pages/SignUp-client/SignUpClient'

import SignUpChoice from './pages/SignUpchoice/signUpChoice'
import SignUpOuvrier from './pages/SignUpOuvrier/signUpOuvrier';
import Workerhome from './pages/WorkerProfil1/workerprofil';
import Checkout from './components/clientComp/Checkout/Checkout';
import ClientNav from './components/clientComp/ClientNav';
import ClientProfile from './components/clientComp/ClientProfile/ClientProfile';
//import OuvrierDashboard from './components/ouvriercomp/OuvrierDashboard';
import OuvrierNav from './components/ouvriercomp/OuvrierNav/OuvrierNav';
import OuvrierSideBar from './components/ouvriercomp/OuvrierSideBar/OuvrierSideBar';
import OuvrierContent from './components/ouvriercomp/OuvrierContent';


//import LoginComp from './pages/LogRegComponent/LoginComp';



function App() {

  const isO = isOuvrier();
  const isLogged = isUserLoggedIn();

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
<<<<<<< HEAD
    <>
    
<OuvrierNav/>
  <Outlet/>
=======
<>
    {
      !isLogged && <Navbar/>
     }
     
    {isO  &&
       <ClientNav/>
    

     }
  


    
     
    
    <Outlet/>
>>>>>>> 8a57ba834f38f7cc4e0c4338f39e4a2f456bee64
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
        },
        {
        
          path: "/checkout",
          element:  <Checkout />,
          
        },
        {
        
          path: "/Profile",
        element:  <ClientProfile />,
          
        },
        {
        
          path: "/ouvrierlist",
        element:  <OuvrierList />,
          
        },
        {
        
          path: "/Client",
        element:  <OuvrierList />,
          
        },

        //ouvrier

        {
        
          path: "/ouvdash",
        element:  <OuvrierContent/>,
          
        },
       

      ],},
      
      {
        path: "/Signin",
          element: <LoginComp />,
      },


      {
        path: "/workerlist",
          element: <OuvrierList />,
      },

    


      
      {
        path: "/Signupchoice",
          element: <SignUpChoice />,
      },

      {
        path: "/Signup/ouvrier",
          element: <SignUpOuvrier />,
      },

      {
        path: "/Workerhome",
          element: <Workerhome />,
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

export default App;