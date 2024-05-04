import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


// succsufull message

const AlertSuccess =(message)=>{
    Swal.fire({
        title: message+" successfully!",
        text: "You clicked the button and countinue!",
        icon: "success"
      });
}

const AlertError =(message)=>{
    Swal.fire({
        title: message,
        text: "You clicked the button and countinue!",
        icon: "error"
      });
}



export {AlertSuccess,AlertError}