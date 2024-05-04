import axios from "axios"


// git all data from database
const getData = (url) =>{
    return axios.get(url)
}


// post order
const postOrder = (url,order)=>{
 return axios.post(url,order)
}


export {getData,postOrder}