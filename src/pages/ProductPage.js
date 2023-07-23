import React from 'react';
import {Link} from "react-router-dom";
import CardData from '../components/CardData';
import "../Productpage.css";


const ProductPage = () => {
  const products=CardData.map(product=>{
    return (
        
      <div key ={product.id} className='card-container'>
       
      <div className='image-container'>
        
        <img src={product.img}  alt='a'/>
      </div>
      <div className='card-content'>
        <h3>{product.title}</h3>
      <p>  {product.description}</p>
      </div>

      <div className='btn'>
        <button>
          <div key={product.id}>
        <Link to={`/products/${product.id}`}>View More</Link>
        </div>
        </button>
      </div>

      </div>

 
    
);
  });

  return (
    <>
    <div className='app'>
    <h1> All Products</h1>
    {products}
    </div>
    
    </>
  );

 };


export default ProductPage;
