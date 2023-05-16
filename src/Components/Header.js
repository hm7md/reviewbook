
import React from "react";
import {Link} from "react-router-dom";
import logo from '../Images/book.png';


class Header extends React.Component {
  render () { 
  
    return (     
   <header>
      <nav className="nav-bar">
      <img id="imglogo" src={logo}/>
        <section>
          <div className="topnav">
              <a href="#saving">rate your reading </a>
              <a href="#my profile">my profile</a>
              <a href="#bettermoneyhabits">our suggestion</a>
              <Link to='/'>Home</Link>
              <Link to='/dashboard'>Dashboard</Link> 
          </div>
        </section>
      </nav>
    </header>
          );
  }
        }
            
export default Header;