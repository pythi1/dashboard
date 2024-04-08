import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Notfound() {
  return (
    <div className='w-full h-screen flex flex-col ' >
        <div className='m-20 text-center' >
            {/* <p className="text-7xl m-4 font-light" >401</p> */}
            <img className=" m-4 mx-auto h-80" src='/404.jpg' ></img>
            {/* <p className="text-md text-gray-500 p-1" >Unauthorized</p> */}
            <p className="text-lg mb-4 font-thin" >This requested URL was not found on this server.</p>

            <Link href='/dashboard' className="underline text-blue-500 flex items-center justify-center gap-4" ><span><FaArrowLeftLong /></span> Return to Dashboard</Link>
        </div>
        
    </div>
  )
}
