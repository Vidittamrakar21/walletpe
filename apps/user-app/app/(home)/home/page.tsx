"use client"

import { useRouter } from "next/navigation"

export default function Home () {

    const router = useRouter();

    const handlepay = (x:boolean,y:boolean) =>{

        router.push(`/pay?phone=${x}&&walletid=${y}`)
    }

    return(
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none  ">
            <div className="h-[300px] w-[600px] bg-[white] rounded-[18px] absolute top-[170px] left-[300px] flex items-center justify-center flex-col shadow-lg">

                <div className="flex justify-center items-center h-[80px] min-w-[200px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                </svg>
                <h1 className="text-[40px] font-[500]">23,520</h1>

                </div>

                <div className="h-[150px] w-[400px]  rounded-t-[50px] relative top-[35px] flex items-center justify-center bg-[#FF1F0D]">
                    <div className="h-[100px] w-[370px]  rounded-t-[50px] relative top-[25px] bg-[#2FC502] shadow-lg">

                    </div>

                </div>

            </div>

            <div onClick={()=>{handlepay(true,false)}} className=" h-[70px] w-[600px] mt-[30px] bg-[white] rounded-[18px] absolute top-[470px] left-[300px] flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]">Pay via Mobile Number</h2>

                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="purple" className="ml-5"  viewBox="0 0 16 16 ">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                 <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
            </div>
            
            <div onClick={()=>{handlepay(false,true)}} className=" h-[70px] w-[600px] mt-[30px] bg-[white] rounded-[18px] absolute top-[570px] left-[300px] flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]" >Pay via Wallet Id</h2>

                <div className="ml-5 text-[19px] text-[purple]">
                    @
                </div>
            </div>
            

        </div>
    )
}