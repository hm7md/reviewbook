import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

import home from './Pages/Home';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/Index.css';

// import "./js/script.js";
import "./js/test.js";

import useScript from './hooks/useScript';


function App() {
  useScript("https://cdnjs.cloudflare.com/ajax/libs/imask/3.4.0/imask.min.js");

  return ( 
   <div>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact Component={home}></Route>
    
      </Routes>
      <Footer/>
    </Router>
  </div> 
  );
}

export default App;
