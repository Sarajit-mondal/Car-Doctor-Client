import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/shard/home/Home";
import SingUp from "../pages/shard/signUp/SingUp";
import LogIn from "../pages/login/LogIn";
import CheckOut from "../components/checkOut/CheckOut";
import AllOrder from "../pages/allOrder/AllOrder";
import PrivateRoute from "./PrivateRoute";
import ErrowPage from "../pages/errowPage/ErrowPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrowPage></ErrowPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/signUp",
        element: <SingUp></SingUp>
      },
      {
        path:"/logIn",
        element: <LogIn></LogIn>
      },
      {
        path:"/checkOut/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
      {
        path:"/allOrder",
        element: <PrivateRoute><AllOrder></AllOrder></PrivateRoute>
      },
    ]
  },
]);

export default router;
