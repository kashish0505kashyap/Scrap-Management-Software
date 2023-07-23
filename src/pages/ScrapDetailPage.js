import React, { useState }  from 'react'

import {  useParams } from 'react-router-dom';
import "../scrapDetailPage.css"
import CardData from "../components/CardData";

const ScrapDetailPage = () => {
  const {productId}=useParams()
  const thisProduct=CardData.find(prod=> String(prod.id) === productId)
 
    
const[num,setNum ]=useState(thisProduct.amount);
const[compute,setCompute]=useState(num*(thisProduct.sellRate-thisProduct.buyRate));
 
  const incNum=()=>{
      setNum(num+1);
      setCompute((num+1)*(thisProduct.sellRate-thisProduct.buyRate));
  }
  const decNum=()=>{
    if(num>0){
      setNum(num-1);
      setCompute((num-1)*(thisProduct.sellRate-thisProduct.buyRate));
    }else{
      alert('not available')
      setNum(0);
      setCompute(0);
    }
  }
  if(!thisProduct)
  return <></>

  return(
    <div className='scrapDetail'>
      <div className='leftSide'>
        <img src={thisProduct.img} alt={thisProduct.title}/>
      </div>
      <div className='rightSide'>
        
      <h1>{thisProduct.title}</h1>
      <div className='details'>
        <div className='counter'>
        <p>{num} Kg</p>
            <div className='btn_div'>
              <button onClick={incNum }>Buy Scrap</button>
              <button onClick={decNum}>Sell Scrap</button>
            </div>
        </div>
        <div className='scrap'>
            <h3>Amount of Scrap item currently available in the store: {num} kg </h3>
            <h3>Buying rate : ${thisProduct.buyRate} per kg</h3>
            <h3>Selling rate : ${thisProduct.sellRate} per kg</h3>
            <h3>Estimated Profit with current amount: ${compute}</h3>
           </div>
      </div>

      
      
      </div>
      
    </div>
  )
}

export default ScrapDetailPage;
