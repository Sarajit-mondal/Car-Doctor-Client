
import { useContext } from 'react';
import login from '../../../assets/images/login/login.svg'
import { AlertError, AlertSuccess } from '../../../utility/AlertAndTost';
import { authContext } from '../../../utility/AuthProvider'

function SingUp() {
  const {createUser} = useContext(authContext)

  // singUp
  const handleSubmit =(e)=>{
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

   createUser(email,password)
   .then(result => {
    console.log(result.user)
    AlertSuccess("Sign Up")
   })
   .catch(error =>{
    console.log(error)
    AlertError(error.code || error.message)
   })
  }
  return (
    <div>
    <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse gap-20">

<div className="card shrink-0 w-full max-w-sm shadow-2xl ">
 <form className="card-body" onSubmit={handleSubmit}>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" name='email' placeholder="email" className="input input-bordered bg-transparent" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" name='password' placeholder="password" className="input input-bordered bg-transparent" required />
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-primary">Sign Up</button>
   </div>
 </form>
</div>
<div className="text-center lg:text-left">
 <img src={login} alt="" />
</div>
</div>
</div>
</div>
  )
}

export default SingUp
