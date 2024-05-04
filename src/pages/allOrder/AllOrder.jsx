import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { Link, useFetchers } from "react-router-dom"

import bannerImg from '../../assets/images/checkout/checkout.png'
import { authContext } from "../../utility/AuthProvider"

function AllOrder() {
    const [allOrder, setAllOrder] = useState()

    const {user} = useContext(authContext)

    useEffect(() => {
        axios.get('./services.json')
            .then(data => setAllOrder(data.data))
    }, [])

    console.log(allOrder)
    return (
       <>
       <img src={bannerImg} alt="" className=" w-full" />
    
        <div className="overflow-x-auto my-20">
            <table className="table">
                {/* head */}

                <tbody>
                    {/* row 1 */}
                    {
                        allOrder && allOrder.map(order => <tr key={order._id}>
                            <th>
                                <label>
                                    <Link><button className="btn btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></Link>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="size-28">
                                            <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{order.title}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                               Date
                               
                            </td>
                            <td>${order.price}</td>
                            <th>
                                <button className="btn bg-orange-500 btn-sm">Pending</button>
                            </th>
                        </tr>)
                    }
                   

                </tbody>
                {/* foot */}


            </table>
        </div>
       </>
    )
}

export default AllOrder
