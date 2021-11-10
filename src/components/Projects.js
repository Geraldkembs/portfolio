import React, { Component } from 'react';
import datas from '../data'
import ProductCard from "./ProductCard";
class Project extends React.Component {
    render() { 
  
        return  <div className='px-10 h-96 w-screen flex flex-wrap' id='#project'>
       {datas.map((data)=>(<ProductCard data={data}/>))}
        
        
    </div>;
    }
}
 
export default Project;
