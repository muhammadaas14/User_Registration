import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import axios from  'axios'



export default function Signup() {
   
        const [name,setName] = useState('')
        const [email,setemail] = useState('')
        const [password,setPassword] = useState('')
        const navigate = useNavigate();
        const handleSubmit =(e)=>{
e.preventDefault();
axios.post('http://localhost:3002/register',{name,email,password}).then(result=>{console.log(result)

navigate('/Login')

})
.catch(error=>console.log(error)) 

}


  return (
    <>
    <div className='container mt-5' >
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" name='name' className="form-control" onChange={(e)=>setName(e.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" onChange={(e)=>setemail(e.target.value)}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control"  onChange={(e)=>setPassword(e.target.value)}  />
    <div id="emailHelp" className="form-text">We'll never share your Password with anyone else.</div>
  </div>

  <button type="submit" className="btn btn-success">Submit</button>


</form>
<Link to={"/Login"} className='btn btn-danger'>
Already A User?
</Link>


</div>
</>

  )
}

