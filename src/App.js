import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Otp from './components/Otp';
import AccountCreated from './components/AccountCreated';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");

  return (
    <Router>
      <div className="App">
        <Header name={name} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount setName={setName} setEmailID={setEmailID} />} /> {/* Pass setName and setEmailID as props */}
          <Route path="/otp" element={<Otp emailID={emailID} />} />
          <Route path="/account-created" element={<AccountCreated />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
