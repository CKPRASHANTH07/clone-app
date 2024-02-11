import React from 'react'


const BW = ({children}) => {
    return(
        <button className=" bg-transparent text-white cursor-pointer font-sans rounded-2xl py-2 px-4  hover:bg-slate-900 border-transparent">{children}</button>
    )
}

const Navbar = () => {
  return (
    
   <div className="flex justify-center fixed w-full h-15 top-0 left-0 bg-black rounded-b-3xl">
  
    
 
 
 <div className='flex justify-center space-x-2 p-6'>
    <h1 className='text-2xl text-white font-sans mr-60 pr-10'>BASIC/DEPT</h1>
    <BW> WORK</BW>
    <BW>ABOUT</BW>
    <BW>NEWS</BW>
    <BW>THINKING</BW>
    <BW>PLEDGE</BW>
    <BW>CAREERS</BW>
    <BW>CONTACT</BW>

    

    </div>
    <button className="bg-transparent text-white font-sans rounded-2xl cursor-pointer py-2 px-6 border-transparent hover:animate-ping ml-60">***</button>
   
   
    </div>
    
    
    )
}

export default Navbar


