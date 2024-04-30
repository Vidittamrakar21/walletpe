"use client"
import Home from '@repo/ui/home'
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from 'next/navigation';
import {signInWithPopup , GoogleAuthProvider} from "firebase/auth"
import {auth} from "./firebase"
import axios from 'axios';
import Cookies from 'js-cookie'

export default function Page(): JSX.Element {

  const [loading, setloading] = useState(true)
  const [count, setcount] = useState(0)
  const router = useRouter()

  const googleAuth = new GoogleAuthProvider();

  const handlelogin  = async (x: string, y:string ,n:string, z: string ) =>{

  console.log(x,y,n)
  
      if (z === 'signin'){

        const userdata  = await (await axios.post('http://localhost:8000/api/auth/signup', {email: x, password: y, name: n, gprovider: false})).data;
      
      if(userdata.token){
     
        const data  = await (await axios.post('http://localhost:8000/api/auth/session', {token: userdata.token})).data;

        if (data.refreshtoken){
          Cookies.set('refreshtoken',data.refreshtoken, {expires: 3} )
           router.push('/home')

        }
        else {
          alert("Unable To Sign In, Try Again Later ")
        }


      }
      else if(userdata.message){
        alert("Kindly Login to Continue ")
      }
      
      }

      else if(z === 'login'){

        const userdata  = await (await axios.post('http://localhost:8000/api/auth/login', {email: x, password: y})).data;
      
      if(userdata.token){
     
        const data  = await (await axios.post('http://localhost:8000/api/auth/session', {token: userdata.token})).data;

        if (data.refreshtoken){
          Cookies.set('refreshtoken',data.refreshtoken, {expires: 3} )
           router.push('/home')

        }
        else {
          alert("Unable To Log In, Try Again Later ")
        }


      }
      else if(userdata.message){
        alert(userdata.message)
      }
   
      
    }


  
  }

  const googleauth  = async (x: string) =>{
    const result  =  await signInWithPopup(auth, googleAuth);

    if(result.user.emailVerified === true && result.user.refreshToken){
      if (x === 'signin'){
        const userdata  = await (await axios.post('http://localhost:8000/api/auth/signup', {email: result.user.email, password: "", name: result.user.displayName, gprovider: true})).data;
      
      if(userdata.token){
     
        const data  = await (await axios.post('http://localhost:8000/api/auth/session', {token: userdata.token})).data;

        if (data.refreshtoken){
          Cookies.set('refreshtoken',data.refreshtoken, {expires: 3} )
           router.push('/home')

        }
        else {
          alert("Unable To Sign In, Try Again Later ")
        }


      }
      else if(userdata.message){
        alert("Kindly Login to Continue ")
      }
      
      }

      else if(x === 'login'){

        const userdata  = await (await axios.post('http://localhost:8000/api/auth/login', {email: result.user.email, password: ""})).data;
      
      if(userdata.token){
     
        const data  = await (await axios.post('http://localhost:8000/api/auth/session', {token: userdata.token})).data;

        if (data.refreshtoken){
          Cookies.set('refreshtoken',data.refreshtoken, {expires: 3} )
           router.push('/home')

        }
        else {
          alert("Unable To Log In, Try Again Later ")
        }


      }
      else if(userdata.message){
        alert(userdata.message)
      }
   
      }
    }
  }


  const check = async () => {
    const token =  Cookies.get("refreshtoken")

    if(token) {
     const data  = await (await axios.post('http://localhost:8000/api/auth/verify', {token: token})).data;
     if(data.status){
         console.log("status", data.status)
         router.push("/home")

     }
     else{
         Cookies.remove("refreshtoken")
         router.push("/")
     }
    }

    else{
     Cookies.remove("refreshtoken")
     router.push("/")
 }

 
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

  
     check()
    
  },[])
  
  const arr = [0,1,2,3,4,5,6,7,8,9]

  
  return (
   
   <>
   {loading? 
    
    <div className='flex items-center justify-center h-[920px] w-[100%] bg-[white] flex-col'>
      <ClipLoader color="#575958" loading={true} />
 
      <h1 className={count=== 0 || count=== 1 || count=== 2 ?"text-[32px] font-[600] text-[#ffffffa8] mt-3":"hidden"}>WalletPe</h1>
      <h1 className={count=== 3 || count=== 4 || count=== 5 || count=== 6?"text-[32px] font-[600] text-[#e6e6e6a8] mt-3":"hidden"}>WalletPe</h1>
      <h1 className={count=== 7|| count=== 8 || count=== 9|| count=== 10?"text-[32px] font-[600] text-[#d3d3d3a8] mt-3":"hidden"}>WalletPe</h1>
      <h1 className={count=== 11 || count=== 12 || count=== 13 || count=== 14?"text-[32px] font-[600] text-[#8d8d8da8] mt-3":"hidden"}>WalletPe</h1>
      <h1 className={count >= 15?"text-[32px] font-[600] text-[#505050a8] mt-3":"hidden"}>WalletPe</h1>

     

     
    </div>: 
  
    <Home title="WalletPe" move={handlelogin} gsign={googleauth}></Home>
  
  }
   </> 

    );
}
