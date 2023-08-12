import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Signup2 from './pages/signup2/Signup2';
import SignupCat from './pages/signup-ouvrier/SignCat';
import LoginComp from './pages/LogRegComponent/LoginComp';
//import LoginComp from './pages/LogRegComponent/LoginComp';



function App() {
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
        path: "/Signup/ouvrier",
      element: <SignupCat />,
        
      },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
