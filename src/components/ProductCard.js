import React, { Component } from 'react';

function ProductCard(props){
   const {data}=props;
   return(<div className='h-80  flex flex-col justify-center w-1/4 m-10 rounded-md py-0 overflow-hidden  bg-pink-200 shadow-xl z-20  '>
  <img className='w-auto h-24' src={data.img}/>
  <h2 className='text-center font-bold font-sans text-lg capitalize py-2'>{data.brand}</h2>
  <h3 className="text-center">$ {data.price}</h3>
  <p className=' text-center font-thin py-2 '> {data.desc}</p>
  <button className=' w-full bg-pink-800 px-2 py-4 rounded-md text-white hover:bg-pink-400 font-md'>Add to Cart</button>
</div>) 
}
export default ProductCard