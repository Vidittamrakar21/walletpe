"use client"
import { useState ,useEffect } from "react"
import Cookies from "js-cookie";
import usertype from '../home/page'
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile ()  {

    const [num, setnum ] = useState("");

    //@ts-ignore
    const [data, setdata] = useState<usertype>({});
    const router = useRouter()

    const [otpbox , setbox] = useState(false)
    const [copy , setcopy] = useState(false)

    const handlenumber = (e:any)=>{
        if((e.target.value).length <= 10){
            setnum(e.target.value)
        }
    }

    const sendotp = ()=>{
        console.log(num)
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


     const copyid = async () =>{
        try {

            await navigator.clipboard.writeText(data.walletid);
            setcopy(true)
            
          } catch (error) {
            setcopy(false)
          }
     }
 

     useEffect(()=>{
        check()
     },[])
 

    return(
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none flex items-center justify-center">
            <div className="min-h-[800px] w-[1300px]  flex items-center justify-start mt-[80px] flex-col">
                <h1 className="text-[28px] font-[600] text-[purple]">Hi, {data.name}</h1>
                
               <div className="flex items-start justify-center h-[90px] w-[600px]  flex-col mt-5">
               <h5 className="ml-2 text-[17px]">Wallet Id</h5>
                <div className=" h-[70px] w-[600px] bg-[white] rounded-[18px]  flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]" >{data.walletid}</h2>
                
                <svg onClick={copyid} xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="purple" className={copy === false ?"ml-5 cursor-pointer":"hidden"}  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                </svg>
                

                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="green" className={copy === true ?"ml-5 cursor-pointer":"hidden"} viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                </svg>
                </div>
               </div>

               <div className={data.number? "flex items-start justify-center h-[90px] w-[600px]  flex-col mt-5" :"hidden"}>
               <h5 className="ml-2 text-[17px]">Mobile Number</h5>
                <div className=" h-[70px] w-[600px] bg-[white] rounded-[18px]  flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]" >{data.number}</h2>
                </div>
               </div>

               <div className="flex items-start justify-center h-[90px] w-[600px]  flex-col mt-5">
               <h5 className="ml-2 text-[17px]">Email Id</h5>
                <div className=" h-[70px] w-[600px] bg-[white] rounded-[18px]  flex items-center justify-start select-none cursor-pointer  shadow-lg">
                <h2 className="ml-4 text-[purple]" >{data.email}</h2>
                </div>
               </div>

                <div className={!data.number && otpbox === false? "w-[600px] h-[200px] mt-[30px] bg-[white]  rounded-[18px] flex justify-center items-center flex-col":"hidden"}>
                    <h1 className="text-[17px]">Add and Verify your Mobile Number to start payments</h1>
                    <input onChange={handlenumber} value={num} type="number" className="h-[35px] w-[350px] border border-[gray] mt-[20px]" placeholder="&nbsp;Enter Mobile Number" />
                    <button onClick={sendotp} className="bg-[#11E980] text-[white] h-[35px] w-[350px] mt-[20px] cursor-pointer">Send OTP</button>

                </div>



                <div className={!data.number && otpbox === true? "w-[600px] h-[200px] mt-[30px] bg-[white]  rounded-[18px] flex justify-center items-center flex-col":"hidden"}>
                    <h1>Enter OTP Sent to +91 9354xxxxxx</h1>
                    <input type="number" className="h-[35px] w-[350px] border border-[gray] mt-[20px]" placeholder="&nbsp;Enter OTP" />
                    <button className="bg-[#11E980] text-[white] h-[35px] w-[350px] mt-[20px] cursor-pointer">Confirm</button>
                </div>


                <div className={!data.pin ? "w-[600px] h-[250px] mt-[30px] bg-[white]  rounded-[18px] flex justify-center items-center flex-col":"hidden"}>
                    <h1 className="text-[17px]">Create a 6 Digit PIN to do Secure and Fast Payments</h1>
                    <input  type="number" className="h-[35px] w-[350px] border border-[gray] mt-[20px]" placeholder="&nbsp;Enter a 6 digit PIN " />
                    <input  type="number" className="h-[35px] w-[350px] border border-[gray] mt-[20px]" placeholder="&nbsp;Confirm PIN " />
                    <button  className="bg-[#11E980] text-[white] h-[35px] w-[350px] mt-[20px] cursor-pointer">Confirm</button>

                </div>

            </div>

        </div>
    )
}