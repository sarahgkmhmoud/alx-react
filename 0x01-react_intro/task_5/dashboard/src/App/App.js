import React from 'react';
import logo from '../assets/HolbertonLogo.svg'
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils'
import { useRef } from 'react'

function App() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);


  const handleLabelClick = (ref) => {
    ref.current.focus();
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
        <label onClick={() => handleLabelClick(emailInputRef)}>Email:</label>
        <input id="emailField" ref={emailInputRef} type="email"></input>
        <label onClick={()=> handleLabelClick(passwordInputRef)}>Password:</label>
        <input id="passwordField" ref={passwordInputRef} type="password"></input>
        <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy()}
        </p>

      </footer>
    </div>
  );
}

export default App;
