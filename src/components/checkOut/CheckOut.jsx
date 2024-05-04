

function CheckOut() {
    return (
        <div>
            <form action="">
                <div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="w-full space-y-5">
                        {/* service name */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Service Name" />
                        </label>
                        {/* service Price */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Service Price" />
                        </label>
                    </div>
                    {/* right side */}
                    <div className="w-full space-y-5">
                        {/* service type */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Service type" />
                        </label>
                        {/* service date */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="date" className="grow" />
                        </label>
                    </div>
                </div>
                
                    <textarea  className="grow w-full h-40 p-5 mt-5 rounded-lg input input-bordered resize-none" placeholder="please write description"/>
                   
                   <input type="submit" value="Submit" className="w-full mt-5 p-2 bg-orange-500" />
                   
            </form>

        </div>
    )
}

export default CheckOut
