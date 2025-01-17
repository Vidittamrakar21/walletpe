"use client"

import { useRouter } from "next/navigation"
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect , useState } from "react";

export default interface usertype {
    email: string,
    number: number,
    walletid: string,
    name: string,
    password: string,
    gprovider: boolean,
    transactions:  [string],
    balance: number,
    pin: number
}

const init = {
    email: "",
    number: 0,
    walletid: "",
    name: "",
    password: "",
    gprovider: true,
    transactions:  [""],
    balance: 0
}

export default function Home () {

    const router = useRouter();
    //@ts-ignore
    const [data, setdata] = useState<usertype>({})

    const handlepay = (x:boolean,y:boolean) =>{

        router.push(`/pay?phone=${x}&&walletid=${y}`)
    }

    const check = async () => {
       const token =  Cookies.get("refreshtoken")

       if(token) {
        const data  = await (await axios.post('http://localhost:8000/api/auth/verify', {token: token})).data;
        if(data.status){
            // console.log("status", data.status)
            Cookies.set('name', data.status.name)
            Cookies.set('uid', data.status.id)

            const userdata  = await (await axios.post('http://localhost:8000/api/auth/getuser', {id:  data.status.id})).data;
            if(userdata){
                setdata(userdata.user)
            }


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

    return(
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none ">

        </div>
    )
    }


    useEffect(()=>{
        check()
    },[])

    return(
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none  ">

            <div className="h-[300px] w-[600px] bg-[white] rounded-[18px] absolute top-[170px] left-[390px] flex items-center justify-center flex-col shadow-lg">

                <div className="flex justify-center items-center h-[80px] min-w-[200px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                </svg>
                <h1 className="text-[40px] font-[500]">{data.balance}</h1>

                </div>

                <div className="h-[150px] w-[400px]  rounded-t-[50px] relative top-[35px] flex items-center justify-center bg-[#FF1F0D]">
                    <div className="h-[100px] w-[370px]  rounded-t-[50px] relative top-[25px] bg-[#2FC502] shadow-lg">

                    </div>

                </div>

            </div>

            <div onClick={()=>{handlepay(true,false)}} className=" h-[70px] w-[600px] mt-[30px] bg-[white] rounded-[18px] absolute top-[145px] left-[1030px] flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]">Pay via Mobile Number</h2>

                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="purple" className="ml-5"  viewBox="0 0 16 16 ">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                 <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
            </div>
            
            <div onClick={()=>{handlepay(false,true)}} className=" h-[70px] w-[600px] mt-[30px] bg-[white] rounded-[18px] absolute top-[250px] left-[1030px] flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]" >Pay via Wallet Id</h2>

                <div className="ml-5 text-[19px] text-[purple]">
                    @
                </div>
            </div>

            <div onClick={()=>{handlepay(false,false)}} className=" h-[70px] w-[600px] mt-[30px] bg-[white] rounded-[18px] absolute top-[350px] left-[1030px] flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]" >Pay Contacts</h2>

                
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="purple" className="ml-5" viewBox="0 0 16 16">
                 <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg>
               
            </div>


            <div className="h-[280px] w-[1250px]  absolute top-[500px] left-[390px] flex items-center justify-start flex-col bg-[white] rounded-[18px] shadow-lg overflow-y-auto overflow-x-hidden">

{/* /// */}

    <div className="min-h-[60px] w-[1100px] mb-2 flex items-center justify-start border border-[gray] mt-[20px] rounded-[10px]">
        <div className="h-[50px] min-w-[150px] flex items-start justify-center flex-col ml-3">
        <h2>Transaction Id_6562saf54ffvwvegd5</h2>
        <h1>24 April, 2024 </h1>
        </div>

        <h2 className="ml-[90px] ">Credited</h2>
        <h2 className="ml-[90px] ">From Vidit Tamrakar</h2>
        <h1 className="absolute right-[250px] text-[20px] text-[#2fd42f]">+ 2300</h1>
        
    </div>

    <div className="min-h-[60px] w-[1100px] mb-2 flex items-center justify-start border border-[gray] mt-[20px] rounded-[10px]">
        <div className="h-[50px] min-w-[150px] flex items-start justify-center flex-col ml-3">
        <h2>Transaction Id_6562saf54ffvwvegd5</h2>
        <h1>24 April, 2024 </h1>
        </div>

        <h2 className="ml-[90px] ">Debited</h2>
        <h2 className="ml-[90px] ">To Varun Sai</h2>
        <h1 className="absolute right-[250px] text-[20px] text-[red]">- 100</h1>
        
    </div>

    

    {/* //// */}
</div>


            

 
            

        </div>
    )
}