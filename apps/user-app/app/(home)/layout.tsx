"use client"

import Nav from '@repo/ui/nav'
import Sidebar from '@repo/ui/sidebar'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const router = useRouter();

  const handleroute = (x:string) =>{
    router.push(`${x}`)
  }

  const logout = () =>{

    Cookies.remove("refreshtoken")
    router.push("/")
  }



  return (
    
     <>
             <Nav move={handleroute} logout={logout} title='WalletPe'></Nav>
            <Sidebar move={handleroute} ></Sidebar>
            {children}
            
     </>
 
        
     

  );
}
