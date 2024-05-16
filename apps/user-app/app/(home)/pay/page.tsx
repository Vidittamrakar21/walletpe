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
    const [contact, setcontact] = useState(false)
    const [proccess, setproccess] = useState(false)

    const handleclick = () => {
        setpay(true)
    }

    const handlecontact = () =>{
        setcontact(true)
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

            {/* ///// */}

             <div className={pay=== false && contact=== false && walletid=== 'false' && phone=== 'false' ?"h-[600px] w-[450px] relative top-[170px] left-[300px]  bg-[#f0f0f0] shadow-lg  flex items-center justify-start flex-col overflow-hidden overflow-y-scroll ": "hidden"}>

                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div onClick={()=>{setcontact(true)}} className="mt-3 min-h-[60px] w-[400px] shadow-md bg-[white] rounded-[18px] flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>

               
                
                


            </div>

            <div className={pay === true?"h-[200px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <input onChange={handlepass} value={pass}  pattern="[0-9]*" className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="password" placeholder="&nbsp;Enter 6 Digits Pin"/>
                
                <button onClick={handleproccess} className={proccess === false?"h-[40px] w-[370px] bg-[#11E980] rounded mt-[30px]":"hidden"}>Pay</button>

                <div className={proccess === true ? "flex relative top-[20px]" : "hidden"}>
                  <ClipLoader color="#575958" loading={true} />
                </div>
                
            </div>


            <div className={contact === true &&pay === false?"h-[350px] w-[500px] bg-[white] rounded-[18px] absolute top-[220px] left-[700px] flex items-center justify-start flex-col shadow-lg":"hidden"}>
                <h1 className="text-[19px] mt-[30px]">Paying To Vidit Tamrakar</h1>
                <input  className="h-[40px] w-[370px] border border-[gray] rounded mt-[50px]" type="number" placeholder="&nbsp;Enter Amount"/>
                <input onChange={handlepass} value={pass}  pattern="[0-9]*" className="h-[40px] w-[370px] border border-[gray] rounded mt-[20px]" type="password" placeholder="&nbsp;Enter 6 Digits Pin"/>
                
                <button onClick={handleproccess} className={proccess === false?"h-[40px] w-[370px] bg-[#11E980] rounded mt-[30px]":"hidden"}>Pay</button>

                <div className={proccess === true ? "flex relative top-[20px]" : "hidden"}>
                  <ClipLoader color="#575958" loading={true} />
                </div>
                
            </div>



        </div>
    )
}