import React from 'react';
import { FaRocket, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./index.css";

function CreateAccount({ setName, setEmailID }) {
  

  const handleNameChange = (event) => {
    setName(event.target.value); 
  };

  const handleEmailIDChange = (event) => {
    setEmailID(event.target.value);
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "40px" }}>
      <FaRocket />
      <h2>Create Your Account</h2>
      <div>
        <input className='input' type='text' placeholder='Enter Your Name' onChange={handleNameChange} />
        <br />
        <input className='input' type='text' placeholder='Enter Email ID'  onChange={handleEmailIDChange} />
        <br />
        <Link to="/otp">
          <button>Continue <FaArrowRight /></button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
