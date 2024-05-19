import React , { useEffect } from 'react'
import './homepage.css'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { addProduct } from './slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './slices/productAPISlice'; 
const Homepage = () => {

  const dispatch = useDispatch();
  const {data: products} = useSelector(state => state.products);

  useEffect( () => { 
    dispatch(fetchProducts());
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
                  <button onClick={()=> dispatch(addProduct(product))} className="btn btn-primary">Add to Cart</button>
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