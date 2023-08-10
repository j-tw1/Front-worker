import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import CatCard from './components/catCard/CatCard';
import Home from './pages/Home/Home';
import Signup from './pages/signup/Signup';
import Signup2 from './pages/signup2/Signup2';



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
          path: "/About",
          element: <Signup2 />,
        },
       

        
      ],}
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
