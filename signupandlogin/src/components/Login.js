import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const[email,setemail] = useState('')
  const[password,setPassword] = useState('')
const navigate = useNavigate()
const handlesubmit=(e)=>{
e.preventDefault();
axios.post('http://localhost:3002/Login',{email,password}).then(result=>{console.log(result)
if(result.data==="success"){
  navigate('/Home')
}


}).catch(error=>console.log(error))

}
  return (
   <>
   <div className='container mt-5' >
   <form onSubmit={handlesubmit}>
 <div className="mb-3">
   <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
   <input type="email" name='email' className="form-control" onChange={(e)=>setemail(e.target.value)} id="exampleInputEmail1" />
   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
 </div>
 <div className="mb-3">
   <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
   <input type="password" name='password' className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputEmail1" />
   <div id="emailHelp" className="form-text">We'll never share your Password with anyone else.</div>
 </div>

 <button type="submit" className="btn btn-success">Submit</button>
 </form>
<div className='mt-1'>

<Link to={"/register"} className='btn btn-danger'>
New User?
</Link>
</div>


</div>
   
   
   </>
  )
}
