"use client"
import { useState } from "react";

type propstype = {
 
  move: (x:string)=>void

}

export default function Sidebar(props: propstype) {

  const [active, setactive] = useState("/home");

  function handlemove(x:string){
    setactive(x);
    props.move(x);
   }


    return(
        <div className="h-[600px] w-[250px] rounded-[18px] bg-[white] fixed top-[170px] left-[20px] flex items-center justify-start flex-col select-none shadow-lg">
             <div onClick={()=>{handlemove('/home')}} className="h-[45px] w-[185px] flex justify-start items-center mt-[20px] cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={active === '/home'? "purple":"gray"} viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
              </svg>

             <h2 className={active === '/home'?"text-[19px] ml-5 text-[purple]": "text-[19px] ml-5"}>Dashboard</h2>
             </div>


             <div onClick={()=>{handlemove('/contacts')}} className="h-[45px] w-[185px] flex justify-start items-center mt-[20px] cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={active === '/contacts'? "purple":"gray"} viewBox="0 0 16 16">
             <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
             <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
             <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
             </svg>
             <h2 className={active === '/contacts'?"text-[19px] ml-5 text-[purple]": "text-[19px] ml-5"}>Contacts</h2>
             </div>



             <div onClick={()=>{handlemove('/transfer')}} className="h-[45px] w-[185px] flex justify-start items-center mt-[20px] cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={active === '/transfer'? "purple":"gray"}  viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
             </svg>
             <h2 className={active === '/transfer'?"text-[19px] ml-5 text-[purple]": "text-[19px] ml-5"}>Transfer</h2>
             </div>



             <div onClick={()=>{handlemove('/transaction')}} className="h-[45px] w-[185px] flex justify-start items-center mt-[20px] cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={active === '/transaction'? "purple":"gray"} viewBox="0 0 16 16">
               <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
               <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
               <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
             </svg>
             <h2 className={active === '/transaction'?"text-[19px] ml-5 text-[purple]": "text-[19px] ml-5"}>Transactions</h2>
             </div>


             <div onClick={()=>{handlemove('/settings')}} className="h-[45px] w-[185px] flex justify-start items-center mt-[280px] cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={active === '/settings'? "purple":"gray"} viewBox="0 0 16 16">
             <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
              </svg>
             <h2 className={active === '/settings'?"text-[19px] ml-5 text-[purple]": "text-[19px] ml-5"}>Settings</h2>
             </div>

        </div>
    )
}