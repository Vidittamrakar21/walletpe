"use client"

type propstype = {
    title: string
    move: (x:string)=>void
    logout: ()=>void

}


export default function Nav(props: propstype){

    function handlemove(){
        props.move('/home');
    }

    
    

    return(
        <nav className="h-[50px] w-[100%] border-b border-b-[#c7c7c7a2] fixed top-[0] flex justify-start items-center select-none bg-[white] ">
         <div onClick={handlemove} className="h-[45px] w-[45px] ml-[50px] flex justify-center items-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#11E980" viewBox="0 0 16 16">
         <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
         </svg>
         </div>

         <h1 onClick={handlemove} className="text-[28px] text-[#424052] font-[500] ml-2 cursor-pointer">{props.title}</h1>


        <button onClick={()=>{props.logout()}} className="h-[37px] w-[90px] text-[white] rounded bg-[#11E980] ml-3 select-none cursor-pointer relative left-[1300px]">Log Out</button>


         <div className="h-[45px] w-[45px] ml-3  flex justify-center items-center select-none cursor-pointer relative left-[1300px]">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="gray"  viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
         </svg>
         </div>

         <div className="h-[45px] w-[45px] ml-3  flex justify-center items-center select-none cursor-pointer relative left-[1300px]">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="gray"  viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
         </div>

        </nav>
    )
}