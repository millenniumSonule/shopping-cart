import React , { useEffect, useState } from 'react'
import './homepage.css'
import Navbar from './navbar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {

  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  const fetchMealDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response);
      setProducts(response.data);
      
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  useEffect( () => {
    fetchMealDetails();
  },[])

  return (
    <div className="homepage-container">
      <div className="navbar-top">
        
        <Navbar/>
      </div>
     
      <div className="plp-page">

      <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Homepage