import axios from "axios"


// git all data from database
const getData = (url) =>{
    return axios.get(url)
}



export {getData}