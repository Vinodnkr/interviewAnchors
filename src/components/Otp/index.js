import React from 'react'
import { FaRocket } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Otp({emailID}) {



  return (
    <div style={{backgroundColor: "black", color:"white", padding :"40px"}}>
    <FaRocket />
    <h2>Create Your Account</h2>
    <div>
    <p>Please verify your email Id to continue <br /> We Have sent OTP to this {emailID}</p>
    <input className='input' type='text'  placeholder='Enter OTP' />
    <br />
   
    <br />
    <Link to="/account-created">
        <button>Continue <FaArrowRight /></button>
      </Link>
    </div>
    </div>
  )
}

export default Otp