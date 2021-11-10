
import React,{useState} from 'react'

export default function Count() {
    const [count,setCount]=useState(0)
    const [className,setClassName]=useState('px-4 py-2 outline-none rounded-md bg-white text-gray-800')
 const handleIncrement=(e)=>{setCount(count+1)}
 const handleDecrement=()=>{
     setCount(count-1)
 }
 const handleVisible=()=>{
     setClassName('hidden')
 }
    return (
        <div className='flex flex-col w-1/2 h-1/2 bg-gray-800 center justify-center content-center'>
            <h1 className='text-6xl text-white font- '>{count}</h1>
            <div className='flex w-1/4 justify-between mb-4'>
                <button onClick={handleIncrement} className='px-4 py-2 outline-none rounded-md bg-white text-gray-800'>Add</button>
                <button onClick={handleDecrement,handleVisible} className={className}>Subtract</button>
            </div>
        </div>
    )
}
