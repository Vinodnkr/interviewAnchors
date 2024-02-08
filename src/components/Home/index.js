import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

function Home() {
 

  return (
    <div style={{backgroundColor: "black", color:"white", padding :"20px"}}>
    <div><p><FaRocket />  For indian users</p></div>
    <h1>Start posting anonymously <br /> where no one will judge</h1>
    <p>Welcome to Stranger discussion forum</p>
    <br/>
    <Link to="/create-account">
        <button>Create Your Account <FaArrowRight /></button>
      </Link>
    <p>Already have account? <span>Login<a href='' /></span></p>
    </div>
  )
}

export default Home