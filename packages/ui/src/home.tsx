"use client"
import { useState } from "react"

type propstype = {
  title: string
  move: ()=>void
}

export default function home(props: propstype){

    const [box, openbox] = useState(false);

    const handlebox = () =>{
      openbox(!box)
    }

    const handlelogin = () =>{
      props.move()
    }


   return(

    <div className="h-[930px] w-[100%] flex items-center justify-center select-none">

    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col bg-[#231F20] ">
    <div className="h-[400px] w-[450px]">
      <img className="h-[100%] w-[100%]" src="/images/img3.jpeg" alt="" />
    </div>
    <h1 className="text-[28px] font-[400] text-[#dfdfdf] mt-3">{props.title}</h1>
    <h1 className="text-[36px] font-[600] text-[#10C2C5]">Your Finances in One Place.</h1>
    </div>


    {/* //// */}

    <div className="h-[100%] w-[100%] flex items-center justify-center flex-col">

      <div className={box?"h-[500px] w-[400px]  flex items-center justify-center flex-col":"hidden"}>
        <div className="flex items-start justify-start h-[40px] w-[330px]  ">
          <h1 className="text-[28px] font-[500] text-[#424052]">Create Wallet account</h1>
        </div>

        <div className="flex items-start justify-center flex-col mt-3">
          <h3 className="text-[gray]">E-mail</h3>
          <input type="text" className="h-[36px] w-[330px] border border-[gray] rounded mt-1" />
        </div>

        <div className="flex items-start justify-center flex-col mt-3">
          <h3 className="text-[gray]">Password</h3>
          <input type="password" className="h-[36px] w-[330px] border border-[gray] rounded mt-1"  />
        </div>
        <button onClick={handlelogin} className="h-[36px] w-[330px] bg-[#11E980] rounded text-[white] mt-6 cursor-pointer">Sign Up</button>
        <h2 className="text-[gray] mt-2">or</h2>

        <div className="h-[36px] w-[330px] bg-[white] border border-[gray] flex items-center justify-evenly rounded cursor-pointer mt-4" >
        <div className="h-[26px] w-[26px]">
        <img className="h-[100%] w-[100%]" src="/images/Google Icon.png" alt="" />
         </div>
        <h4>Continue with Google</h4>         
        </div>

        <h4 className="text-[#424052] mt-2">Already have account? <span onClick={handlebox} className="text-[#419FE4] underline cursor-pointer">Log In</span></h4>

      </div>

      {/* ///login/// */}

      <div className={!box?"h-[500px] w-[400px]  flex items-center justify-center flex-col":"hidden"}>
        <div className="flex items-start justify-start h-[40px] w-[330px]  ">
          <h1 className="text-[28px] font-[500] text-[#424052]">Log In</h1>
        </div>

        <div className="flex items-start justify-center flex-col mt-3">
          <h3 className="text-[gray]">E-mail</h3>
          <input type="text" className="h-[36px] w-[330px] border border-[gray] rounded mt-1" />
        </div>

        <div className="flex items-start justify-center flex-col mt-3">
          <h3 className="text-[gray]">Password</h3>
          <input type="password" className="h-[36px] w-[330px] border border-[gray] rounded mt-1"  />
        </div>

        <div className="flex items-start justify-start h-[20px] w-[330px]  flex-col mt-2">
          <h5 className="text-[#419FE4] text-[14px] underline cursor-pointer">Forgot Password?</h5>
          
        </div>
        <button onClick={handlelogin} className="h-[36px] w-[330px] bg-[#11E980] rounded text-[white] mt-6 cursor-pointer">Log In</button>
        <h2 className="text-[gray] mt-2">or</h2>

        <div className="h-[36px] w-[330px] bg-[white] border border-[gray] flex items-center justify-evenly rounded cursor-pointer mt-4" >
        <div className="h-[26px] w-[26px]">
        <img className="h-[100%] w-[100%]" src="/images/Google Icon.png" alt="" />
         </div>
        <h4>Continue with Google</h4>         
        </div>

        <h4 className="text-[#424052] mt-2">Don't have account? <span onClick={handlebox} className="text-[#419FE4] underline cursor-pointer">Sign Up</span></h4>

      </div>

    </div>
    
  </div>
   )
}