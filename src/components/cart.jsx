import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Your Cart</h2>
        <div className="row">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Category:</strong> {item.category}</p>
                    <button className="btn btn-primary">Remove from Cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
