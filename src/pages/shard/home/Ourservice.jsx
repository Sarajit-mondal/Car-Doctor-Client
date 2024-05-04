import axios from "axios";
import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getData } from "../../../dataLoad/DataLoad";

function Ourservice() {
const [services,setServices] = useState()

useEffect(()=>{
    getData('http://localhost:5000/service')
    .then(data => setServices(data.data))
},[])
  return (

  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
   {
    services && services.map(service =>   <div key={service._id} className="card w-full shadow-xl">
    <figure><img src={service.img} alt="Shoes" className="h-72" /></figure>
    <div className="card-body">
      <h2 className="card-title">{service.title}</h2>
     
      <div className="flex justify-between items-center text-red-500 font-bold">
      <p>Price : {service.price}</p>
      <Link to={`checkOut/${service._id}`}>
      <button className="btn btn-primary">Book Now</button>
      </Link>
       
      </div>
    </div>
  </div>)
   }
    </div>
    </>
  )

}

export default Ourservice
