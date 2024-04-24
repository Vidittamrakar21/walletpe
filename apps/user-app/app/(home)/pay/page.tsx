"use client" 

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";



export default function Pay () {

    const param = useSearchParams();

    const phone = param.get("phone")
    const walletid = param.get("walletid")

    const handleclick = () => {
        console.log(phone)
        console.log(walletid)
    }

    // useEffect(()=>{
       
    // })

    return (
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none">

            <div className={phone=== "true"?"h-[300px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="number" placeholder="&nbsp;Enter Mobile Number"/>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[30px]" type="number" placeholder="&nbsp;Enter Amount"/>
                <button className="h-[40px] w-[370px] bg-[#11E980] rounded mt-[50px]">Pay</button>
            </div>

           <div className={walletid=== "true"?"h-[300px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="text" placeholder="&nbsp;Enter Wallet Id"/>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[30px]" type="number" placeholder="&nbsp;Enter Amount"/>
                <button className="h-[40px] w-[370px] bg-[#11E980] rounded mt-[50px]" onClick={handleclick}>Pay</button>
            </div>

        </div>
    )
}