import React from 'react';
import { Link } from 'react-router-dom';
import { BsGrid3X3GapFill } from "react-icons/bs";
import './index.css'; 


function Header({name}) {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><BsGrid3X3GapFill style={{fontSize:"27px"}}/>    <Link to="/" className="nav-link">    ANONYMOUS</Link></li>
          {name && name.trim() !== "" && (
            <li className="nav-item"><Link to="/create-account" className="nav-link">Welcome, {name}</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
