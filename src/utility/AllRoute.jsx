import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/shard/home/Home";
import SingUp from "../pages/shard/signUp/SingUp";
import LogIn from "../pages/login/LogIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"signUp",
        element: <SingUp></SingUp>
      },
      {
        path:"logIn",
        element: <LogIn></LogIn>
      },
    ]
  },
]);

export default router;
