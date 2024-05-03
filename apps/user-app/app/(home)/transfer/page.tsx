"use client"

import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
export default function Transfer () {

    const [opt,setopt] = useState(false)
    const [bank , setbank] = useState('')
    const [amount , setamount] = useState(0)
    const [proccess, setproccess] = useState(false)
    const router  = useRouter()


    const handleamount = (e:any) => {
        setamount(e.target.value)
    }

    const handlebank = (e:any) => {
        setbank(e.target.value)
    }

    const addmoney = async () => {
        console.log(amount)
        console.log(bank)
        const uid  = Cookies.get('uid')
        const name  = Cookies.get('name')
        setproccess(true)

        if(!(amount && bank)){
            alert("All the fields are required !")
            setproccess(false)

           
        }
        else{

           if(amount > 20000){
            alert("You can only add upto Rs 20000 at a time !")
            setproccess(false)
          
           }
           else if(amount <= 0){
            alert("Amount can't be 0 or negative !")
            setproccess(false)
          

           }
           else{
            setproccess(true)
            const data  = await (await axios.post('https://dummy-bank-backend.vercel.app/api/token/init', {id: uid, name: name, amount: amount, bank: bank})).data;

            if(data.token){
                setproccess(false)
                router.replace('/home')
                window.open(`https://mydummybank.netlify.app/${bank}?token=${data.token}`, '_blank');
                setproccess(false)
    
            }
            else{
                alert("Unable to proccess the request, Try again later !")
                setproccess(false)
                setproccess(false)
            }
           }
        }

    }

    

   return(
    <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none ">
        <div className="h-[600px] w-[1400px]  absolute top-[170px] left-[300px] flex items-start justify-start flex-col">
           <div className="h-[80px] w-[250px] flex justify-center items-center">
           <div onClick={()=>{setopt(!opt)}} className={!opt?"h-[40px] w-[120px] rounded-[18px] bg-[#11E980] ml-4 text-[white] flex justify-center items-center cursor-pointer":"h-[40px] w-[120px] rounded-[18px] bg-[white] border border-[gray] text-[gray] ml-4 flex justify-center items-center cursor-pointer"}>Add Money</div>
           <div onClick={()=>{setopt(!opt)}} className={opt?"h-[40px] w-[120px] rounded-[18px] bg-[#11E980] ml-4 text-[white] flex justify-center items-center cursor-pointer":"h-[40px] w-[120px] rounded-[18px] bg-[white] border border-[gray] text-[gray] ml-4 flex justify-center items-center cursor-pointer"}>Withdraw</div>
            
           </div>

           <div className="h-[400px] w-[500px] flex items-center justify-evenly">

            <div className={!opt?"h-[350px] w-[415px] bg-[white] rounded-[18px] shadow-lg flex items-start justify-start flex-col":"hidden"}>
                <h1 className="text-[19px] ml-3 mt-3">Add money to your wallet</h1>
                <h5 className="mt-[40px] ml-3 ">Enter Amount</h5>
                <input onChange={handleamount} className="h-[35px] w-[390px]  ml-3 border border-[gray] rounded" type="number" />
                
                <h5 className="mt-[30px] ml-3 ">Select Bank</h5>
                <select onChange={handlebank} className="h-[35px] w-[390px]  ml-3 border border-[gray] rounded" name="Bank" id="">
                    <option value="" disabled selected hidden>Select your bank</option>
                    <option value="HDFC">HDFC</option>
                    <option value="SBI">SBI</option>
                </select>

                <button onClick={addmoney} className={proccess === false ? "h-[35px] w-[390px]  ml-3 mt-[30px] rounded bg-[#424052] text-[white]":"hidden"} disabled={false}>Add Money</button>
                <div className={proccess === true ? "flex relative top-[10px] left-[190px]" : "hidden"}>
                  <ClipLoader color="#575958" loading={true} />
                </div>


            </div>


            <div className={opt? "h-[350px] w-[415px] bg-[white] rounded-[18px] shadow-lg flex items-start justify-start flex-col": "hidden"}>
                <h1 className="text-[19px] ml-3 mt-3">Withdraw money from your wallet</h1>
                <h5 className="mt-[40px] ml-3 ">Enter Amount</h5>
                <input className="h-[35px] w-[390px]  ml-3 border border-[gray] rounded" type="number" />
                
                <h5 className="mt-[30px] ml-3 ">Select Bank</h5>
                <select className="h-[35px] w-[390px]  ml-3 border border-[gray] rounded" name="Bank" id="">
                    <option value="HDFC">HDFC</option>
                    <option value="SBI">SBI</option>
                </select>

                <button className="h-[35px] w-[390px]  ml-3 mt-[30px] rounded bg-[#424052] text-[white]" disabled={false}>Withdraw</button>

               
            </div>
            {/* <div className="h-[350px] w-[350px] bg-[white]  rounded-[18px] shadow-lg"></div> */}

           </div>
        </div>

    </div>
   )
} 