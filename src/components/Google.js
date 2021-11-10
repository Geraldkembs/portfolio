import React, { useState } from 'react'

export default function Google() {
    const [logo,setLogo]=useState('Google')
    
    return (
        <div>
           <div>{logo}</div> 
           <input type='text' placeholder='' value={logo} onChange={(e)=>setLogo(e.target.value)}/>
        </div>
    )
}
