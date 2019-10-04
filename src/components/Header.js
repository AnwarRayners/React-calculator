import React from 'react';
import ReactLogo from '../Images/React.js_logo.png';

function Header(props) {
  return (<header className="App-header">
<h1>{props.loggedIn ? `Hello, ${props.name}` : 'Please log in'}</h1>
<img src={ReactLogo} alt="myLogo" id="logo"/>
  	<h2>this is my shop go home</h2></header>);
    
};

export default Header;