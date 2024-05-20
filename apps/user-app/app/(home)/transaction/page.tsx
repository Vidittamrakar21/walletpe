"use client"


export default function Transaction () {
    return (
        <div className="h-[930px] w-[100%] bg-[#ebebeb] select-none">
            <div className="h-[600px] w-[1400px]  absolute top-[170px] left-[300px] flex items-center justify-start flex-col bg-[white] rounded-[18px] shadow-lg overflow-y-auto overflow-x-hidden">

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