import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { authContext } from "../../utility/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/Firebase.cofige";
import { AlertError, AlertSuccess } from "../../utility/AlertAndTost";

function Navbar() {

  const {user} = useContext(authContext)


  const handleLogOut =()=>{
    signOut(auth)
    .then(result => {
      AlertSuccess("Log Out")
    })
    .catch(error =>{
      AlertError(error.code || error.message)
    })
  }
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {
            user ? <div className="flex"> <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/allOrder">All Order</NavLink>
          </li>
           <li>
           <button className="btn" onClick={handleLogOut}>Log Out</button>
         </li></div> : <div className="flex gap-5  "> <li>
            <NavLink to="/logIn">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signUp">Sign UP</NavLink>
          </li></div>
          }
          </ul>
        </div>
        <NavLink to="/" className=" text-xl">
          <img src={logo} alt="" className="size-20 my-2" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {
            user ? <div className="flex"> <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/allOrder">All Order</NavLink>
          </li>
           <li>
           <button className="btn" onClick={handleLogOut}>Log Out</button>
         </li></div> : <div className="flex gap-5  "> <li>
            <NavLink to="/logIn">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signUp">Sign UP</NavLink>
          </li></div>
          }
       
         
         
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <FaShoppingBag className="text-2xl cursor-pointer"></FaShoppingBag>
        <IoIosSearch className="text-2xl cursor-pointer"></IoIosSearch>
        <a className="btn text-red-500 border-2 border-red-500 bg-transparent text-lg font-bold">
          Appointment
        </a>
      </div>
    </div>
  );
}

export default Navbar;
