import login from '../../assets/images/login/login.svg'

function LogIn() {
  return (
    <div>
    <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse gap-20">

<div className="card shrink-0 w-full max-w-sm shadow-2xl ">
 <form className="card-body">
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" placeholder="email" className="input input-bordered bg-transparent" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" placeholder="password" className="input input-bordered bg-transparent" required />
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-primary">logIn</button>
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

export default LogIn
