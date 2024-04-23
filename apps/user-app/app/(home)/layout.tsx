"use client"

import Nav from '@repo/ui/nav'
import Sidebar from '@repo/ui/sidebar'
import { useRouter } from 'next/navigation';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const router = useRouter();

  const handleroute = (x:string) =>{
    router.push(`${x}`)
  }



  return (
    
     <>
             <Nav move={handleroute} title='WalletPe'></Nav>
            <Sidebar move={handleroute}></Sidebar>
            {children}
            
     </>
 
        
     

  );
}
