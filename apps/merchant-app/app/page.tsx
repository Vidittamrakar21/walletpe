"use client"
import Home from '@repo/ui/home'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Page(): JSX.Element {

  const [loading, setloading] = useState(true)
  const [count, setcount] = useState(0)

  const router = useRouter()

  const handlelogin  = () =>{
    router.push('/home')
  }

  useEffect(()=>{

  const timer =  setInterval(() => {
      setcount((prevCounter) => prevCounter + 1);
      console.log("cnt", count)
    },100);

    
   
    setTimeout(()=>{
      clearInterval(timer); 
      setloading(false)
    }, 3000)

  
     
    
  },[])
  
  const arr = [0,1,2,3,4,5,6,7,8,9]

  
  return (
   
   <>
   {loading? 
    
    <div className='flex items-center justify-center h-[920px] w-[100%] bg-[white] flex-col'>
      <ClipLoader color="#575958" loading={true} />
 
      <h1 className={count=== 0 || count=== 1 || count=== 2 ?"text-[32px] font-[600] text-[#ffffffa8] mt-3":"hidden"}>WalletPe Merchant</h1>
      <h1 className={count=== 3 || count=== 4 || count=== 5 || count=== 6?"text-[32px] font-[600] text-[#e6e6e6a8] mt-3":"hidden"}>WalletPe Merchant</h1>
      <h1 className={count=== 7|| count=== 8 || count=== 9|| count=== 10?"text-[32px] font-[600] text-[#d3d3d3a8] mt-3":"hidden"}>WalletPe Merchant</h1>
      <h1 className={count=== 11 || count=== 12 || count=== 13 || count=== 14?"text-[32px] font-[600] text-[#8d8d8da8] mt-3":"hidden"}>WalletPe Merchant</h1>
      <h1 className={count >= 15?"text-[32px] font-[600] text-[#505050a8] mt-3":"hidden"}>WalletPe Merchant</h1>

     

     
    </div>: 
  
    <Home title="WalletPe Merchant" move={handlelogin}></Home>
  
  }
   </> 

    );
}
