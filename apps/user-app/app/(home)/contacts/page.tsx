"use client"


export default function Contacts () {
    return (
        <div className="h-[930px] w-[100%] bg-[#ebebeb]  select-none flex items-center justify-center">
            <div className="h-[600px] w-[800px]  bg-[#f0f0f0] shadow-lg  flex items-center justify-start flex-col overflow-hidden overflow-y-scroll ">

                <div className="mt-3 min-h-[60px] w-[400px] bg-[white] rounded-[18px] shadow-md flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div className="mt-3 min-h-[60px] w-[400px] bg-[white] rounded-[18px] shadow-md flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div className="mt-3 min-h-[60px] w-[400px] bg-[white] rounded-[18px] shadow-md flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>
                <div className="mt-3 min-h-[60px] w-[400px] bg-[white] rounded-[18px] shadow-md flex items-center justify-start mb-2">

                    <div className="ml-3 h-[50px] w-[50px] rounded-[50%] bg-[purple] text-[white] flex items-center justify-center">
                            V
                    </div>

                    <h2 className="ml-3">Vidit Tamrakar</h2>
                </div>

                
                


            </div>

            <div className= "relative bottom-[160px] left-[30px] h-[270px] w-[500px] bg-[white] rounded-[18px] flex justify-center items-center flex-col shadow-lg">
                        <h1 className="text-[19px]">Add Contact</h1>
                        <input  type="number" className="mt-3 h-[35px] w-[360px] border border-[gray]" placeholder="&nbsp;Enter Phone Number" />
                        <h3 className="mt-2">OR</h3>
                        <input  type="text" className="mt-3 h-[35px] w-[360px] border border-[gray]" placeholder="&nbsp;Enter WalletPe Id" />
                        
                        <button className="mt-5 h-[40px] w-[360px] bg-[#11E980] text-[white] cursor-pointer">Add</button>
                      
                    </div>
            
        </div>
    )
}