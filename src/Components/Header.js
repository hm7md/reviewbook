
import React from "react";
import {Link} from "react-router-dom";
import logo from '../Images/book.png';


class Header extends React.Component {
  render () { 
  
    return (     
   <header>
      <nav className="nav-bar">
      <img id="imglogo"  src={logo}/> 
        <section>

          <div className="topnav">
              <Link to='/review'> rate your reading </Link>
              <Link to='/booklist'> book List </Link> 
              <Link to='/'>Home</Link>
            

              
          </div>
          


        </section>
      </nav>
      <div id="wrapperHeader">
      <div id="header"/>
       <img src="images/bh.jpeg" alt="logo" />
      </div> 
    </header>
          );
  }
        }
            
export default Header;