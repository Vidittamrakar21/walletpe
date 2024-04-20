"use client"
import Home from '@repo/ui/home'
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Page(): JSX.Element {

  const [loading, setloading] = useState(true)

  useEffect(()=>{
   
    setTimeout(()=>{
      setloading(false)
    }, 2000)
  })
  

  
  return (
   
   <>
   {loading? 
    
    <div className='flex items-center justify-center h-[920px] w-[100%] bg-[white] flex-col'>
      <ClipLoader color="#575958" loading={true} />
      <h1 className="text-[32px] font-[600] text-[#505050a8] mt-3">WalletPe</h1>
    </div>: 
  
    <Home></Home>
  
  }
   </> 

    );
}
