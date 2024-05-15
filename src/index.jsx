import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './components/cart';
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { store } from './components/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
    </Provider>




  </React.StrictMode>
);

