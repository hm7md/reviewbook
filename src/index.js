import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import '..style/Index.css';
import ItemList from './Components/ItemList';   




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
   
    </Routes>
    
    </BrowserRouter>

   
);

