import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="container mt-5">
    <div className="jumbotron text-center">
      <h1 className="display-4">You are welcome</h1>
      <p className="lead">Register Yourself To Visit Our Page</p>
      
    
      <div className="mt-4">
 
    <Link to={"/Signup"} className='btn btn-success'>
    New User
    </Link>
    

    <Link to={"/Login"} className='btn btn-danger'>
    Already A User?
    </Link>
      </div>
    </div>
  </div>
  )
}
