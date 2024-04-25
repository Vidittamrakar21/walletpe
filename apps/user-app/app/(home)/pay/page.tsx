"use client" 

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";


export default function Pay () {

    const param = useSearchParams();

    const phone = param.get("phone")
    const walletid = param.get("walletid")
    const [pass, setpass] = useState("");

    const [pay, setpay] = useState(false)
    const [proccess, setproccess] = useState(false)

    const handleclick = () => {
        setpay(true)
    }

    const handlepass = (e:any)=> {
        const ch = hasNonNumericCharacters(e.target.value)
        if((e.target.value).length <= 6) {
            if(!ch){

                setpass(e.target.value)
            }
           
        }
    }

    const hasNonNumericCharacters = (input:string) => {
        return /\D/.test(input);
      };

    const handleproccess = () =>{
        setproccess(true)
    }  
   

    return (
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none">

            <div className={phone=== "true" && pay === false?"h-[300px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="number" placeholder="&nbsp;Enter Mobile Number"/>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[30px]" type="number" placeholder="&nbsp;Enter Amount"/>
                <button className="h-[40px] w-[370px] bg-[#11E980] rounded mt-[50px]" onClick={handleclick}>Continue</button>
                
            </div>

           <div className={walletid=== "true" && pay === false?"h-[300px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="text" placeholder="&nbsp;Enter Wallet Id"/>
                <input className="h-[40px] w-[370px] border border-[gray] rounded mt-[30px]" type="number" placeholder="&nbsp;Enter Amount"/>
                <button className="h-[40px] w-[370px] bg-[#11E980] rounded mt-[50px]" onClick={handleclick}>Continue</button>
            </div>

            <div className={pay === true?"h-[200px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <input onChange={handlepass} value={pass}  pattern="[0-9]*" className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="password" placeholder="&nbsp;Enter 6 Digits Pin"/>
                
                <button onClick={handleproccess} className={proccess === false?"h-[40px] w-[370px] bg-[#11E980] rounded mt-[30px]":"hidden"}>Pay</button>

                <div className={proccess === true ? "flex relative top-[20px]" : "hidden"}>
                  <ClipLoader color="#575958" loading={true} />
                </div>
                
            </div>



        </div>
    )
}