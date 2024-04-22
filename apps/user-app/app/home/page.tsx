"use client"
import Nav from '@repo/ui/nav'
import Sidebar from '@repo/ui/sidebar'
export default function Home () {
    return(
        <div className="h-[930px] w-[100%] bg-[#ebebeb] ">
            <Nav title='WalletPe'></Nav>
            <Sidebar></Sidebar>

        </div>
    )
}