import React from "react";
function Nav(){
  return(
  <nav className='bg-gray-700 w-screen h-16 flex justify-between mt-0 px-10 items-center '>
    <div className='bg-white h-10 w-10  rounded-full text-gray-900 font-bold text-center'>GK</div>
    <div className='flex '>
      <div className='px-4 py-2 text-gray-200 rounded-md hover:bg-gray-500 m-4'>About Me</div>
      <div className='px-4 py-2 text-gray-200 rounded-md hover:bg-gray-500 m-4'>Skills</div>
      <div className='px-4 py-2 text-gray-200 rounded-md hover:bg-gray-500 m-4'><a href='#project'>Projects</a></div>
      <div className='px-4 py-2 text-gray-200 rounded-md hover:bg-gray-500 m-4'>Contacts</div>
    </div>
    <button className='flex-end outline-none bg-gray-200 z-10 rounded-md border-0 text-gray-900 hover:bg-gray-600  hover:text-gray-200 px-4 py-2'>Sign Up</button>
  </nav>)
}
export default Nav