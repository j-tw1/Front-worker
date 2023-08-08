import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import CatCard from './components/catCard/CatCard';
import Home from './pages/Home/Home';


function App() {
  const Layout = () => {
  return (
    <>
    <Navbar/>
    
    <Home/>
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
       

        
      ],}
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
