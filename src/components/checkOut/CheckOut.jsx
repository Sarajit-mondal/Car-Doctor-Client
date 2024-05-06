import { useContext } from "react"
import { authContext } from "../../utility/AuthProvider"
import { postOrder } from "../../dataLoad/DataLoad"
import { AlertError, AlertSuccess } from "../../utility/AlertAndTost"
import { useLoaderData, useParams } from "react-router-dom"


function CheckOut() {
    const {user,loading,setLoading} = useContext(authContext)
    const orderItem = useLoaderData()
    const {id} = useParams()
    console.log(orderItem)
    const {email} = user || {}

    const {title,price,img,} = orderItem || {}
     console.log(orderItem)
    // create order
    const handleSubmit =(e) =>{
        e.preventDefault()
        const form = e.target
        const serviceName = form.name.value;
        const serviceType = form.type.value;
        const servicePrice =form.price.value;
        const description = form.descrition.value;
        const date = form.date.value;
       

        const order = {serviceName,serviceType,servicePrice,description,date,email,price,status : "Panding",img}
        console.log(order)

        postOrder('http://localhost:5000/allOrder',order)
        .then(res => {
            AlertSuccess("Order Confarm")
        })
        .catch(error =>{
            setLoading(flase)
            AlertError(error.code || error.message)

        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full space-y-5">
                        {/* service name */}
                        <label className="input  input-bordered flex items-center gap-2">
                            <input type="text"  className="grow"name="name" placeholder="Service Name" />
                        </label>
                        {/* service Price */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" defaultValue={price} name="price" className="grow" placeholder="Service Price" />
                        </label>
                    </div>
                    {/* right side */}
                    <div className="w-full space-y-5">
                        {/* service type */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="type" className="grow" placeholder="Service type" />
                        </label>
                        {/* service date */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="date" name="date" className="grow" />
                        </label>
                    </div>
                </div>
                
                    <textarea name="descrition" className="grow w-full h-40 p-5 mt-5 rounded-lg input input-bordered resize-none" placeholder="please write description"/>
                   
                   <input type="submit" value="Submit" className="w-full mt-5 p-2 bg-orange-500" />
                   
            </form>

        </div>
    )
}

export default CheckOut
