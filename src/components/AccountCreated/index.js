import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";


function AccountCreated() {

  let emailID="{{emailID}}"

  return (
    <div style={{backgroundColor: "black", color:"white", padding :"40px"}}>
    <BiBadgeCheck style={{fontSize: "50px"}} />

    <h2>Account Created <br /> Successfully</h2>
    <div>

    

    <Link to="/dashboard">
        <button>Create Your First Post <FaArrowRight /></button>
      </Link>


    </div>
    </div>
  )
}

export default AccountCreated

//dashboard