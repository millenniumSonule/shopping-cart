import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './components/cart';
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element= {<Cart/>}/> 

      </Routes>
    </BrowserRouter>

   

  </React.StrictMode>
);

