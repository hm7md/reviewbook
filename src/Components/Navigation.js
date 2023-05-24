import React from 'react';
import logo from '../Images/book.png';
import { Link } from 'react-router-dom';
import "../style/Index.css";



function Navigation() {
return (
        <section>
          <div className="topnav">
            <img id="imglogo"  src={logo}/> 
            <Link to='/'>Dashboard</Link> 
            <Link to='/'>review</Link>
            <Link to='/'>bookList</Link>
            </div>
            <button>rate us</button>
          </section>
          );
}
export default Navigation;