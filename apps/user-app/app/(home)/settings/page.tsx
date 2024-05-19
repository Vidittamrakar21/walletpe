"use client" 

import { useState } from "react"

export default function Settings () {

    const [box, setbox] = useState(false)
    const [mail, setmail] = useState(false)
    const [num , setnum] = useState(false)
    const [block, setblock] = useState(false)
    const [rem, setrem] = useState(false)

    const handleclick = (x:string) => {
        setbox(true)

        if(x === 'mail'){
            setmail(true)

        }

        else if(x=== 'num'){
            setnum(true)
        }

        else if(x === 'block'){
           
            setblock(true)
        }

        else if(x === 'rem'){
            setrem(true)
        }

    }

    const closebox = () =>{
        setbox(false)
        setmail(false)
        setnum(false)
        setblock(false)
        setrem(false)
    }

    return (
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none flex items-center justify-center">
            <div className="h-[600px] w-[800px]  flex items-center justify-start flex-col bg-[#F0F0F0] shadow-lg">
                

            <div onClick={()=>{handleclick('mail')}} className=" h-[70px] w-[600px] bg-[white] rounded-[18px] mt-5 flex items-center justify-start select-none cursor-pointer  shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="purple" className="ml-3" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
             <h2 className="ml-4 text-[purple]" >Edit E-Mail</h2>
            </div>

            <div onClick={()=>{handleclick('num')}} className=" h-[70px] w-[600px] bg-[white] rounded-[18px] mt-5 flex items-center justify-start select-none cursor-pointer  shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="purple" className="ml-3" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
             <h2 className="ml-4 text-[purple]" >Edit Phone Number</h2>
            </div>

            <div onClick={()=>{handleclick('block')}} className=" h-[70px] w-[600px] bg-[white] rounded-[18px] mt-5 flex items-center justify-start select-none cursor-pointer  shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="purple" className="ml-3" viewBox="0 0 16 16">
            <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
            </svg>
             <h2 className="ml-4 text-[purple]" >Block User</h2>
            </div>

            <div onClick={()=>{handleclick('rem')}} className=" h-[70px] w-[600px] bg-[white] rounded-[18px] mt-5  flex items-center justify-start select-none cursor-pointer  shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="purple" className="ml-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"/>
            </svg>
             <h2 className="ml-4 text-[purple]" >Remove Account</h2>
            </div>



            </div>

            <div className={box === true ?"fixed top-0 left-0 right-0 bottom-0 bg-[#5e5d5d8c] flex items-center justify-center": "hidden"}>


                    <div className={mail === true?"h-[190px] w-[500px] bg-[white] rounded-[18px] flex justify-center items-center flex-col": "hidden"}>
                        <h1 className="text-[19px]">Edit Email</h1>
                        <input  type="text" className="mt-3 h-[35px] w-[260px] border border-[gray]" placeholder="&nbsp;Enter Email" />
                        <div className="mt-3 flex items-center justify-evenly h-[50px] w-[260px]">
                        <button className="h-[35px] w-[120px] bg-[#11E980] text-[white] cursor-pointer">Edit</button>
                        <button onClick={closebox} className="h-[35px] w-[120px] border border-[gray] cursor-pointer">Cancel</button>
                        </div>
                    </div>


                    <div className={num === true?"h-[190px] w-[500px] bg-[white] rounded-[18px] flex justify-center items-center flex-col":"hidden"}>
                        <h1 className="text-[19px]">Edit Phone Number</h1>
                        <input  type="number" className="mt-3 h-[35px] w-[260px] border border-[gray]" placeholder="&nbsp;Enter Number" />
                        <div className="mt-3 flex items-center justify-evenly h-[50px] w-[260px]">
                        <button className="h-[35px] w-[120px] bg-[#11E980] text-[white] cursor-pointer">Edit</button>
                        <button onClick={closebox} className="h-[35px] w-[120px] border border-[gray] cursor-pointer">Cancel</button>
                        </div>
                    </div>

                     <div className={block === true? "h-[230px] w-[500px] bg-[white] rounded-[18px] flex justify-center items-center flex-col":"hidden"}>
                        <h1 className="text-[19px]">Block User</h1>
                        <input  type="number" className="mt-3 h-[35px] w-[260px] border border-[gray]" placeholder="&nbsp;Enter Phone Number" />
                        <h3 className="mt-2">OR</h3>
                        <input  type="text" className="mt-3 h-[35px] w-[260px] border border-[gray]" placeholder="&nbsp;Enter WalletPe Id" />
                        <div className="mt-3 flex items-center justify-evenly h-[50px] w-[260px]">
                        <button className="h-[35px] w-[120px] bg-[#11E980] text-[white] cursor-pointer">Block</button>
                        <button onClick={closebox} className="h-[35px] w-[120px] border border-[gray] cursor-pointer">Cancel</button>
                        </div>
                    </div>

                     <div className={rem === true ?"h-[230px] w-[500px] bg-[white] rounded-[18px] flex justify-center items-center flex-col":"hidden"}>
                        <h1 className="text-[19px]">Remove Account</h1>
                        <input  type="password" className="mt-3 h-[35px] w-[260px] border border-[gray]" placeholder="&nbsp;Enter 6 Digit PIN" />
                        <div className="mt-3 flex items-center justify-evenly h-[50px] w-[260px]">
                        <button className="h-[35px] w-[120px] bg-[#11E980] text-[white] cursor-pointer">Remove</button>
                        <button onClick={closebox} className="h-[35px] w-[120px] border border-[gray] cursor-pointer">Cancel</button>
                        </div>
                    </div>


            </div>

        </div>
    )
}