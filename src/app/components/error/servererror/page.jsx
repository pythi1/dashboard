import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ServerError() {
    return (

        <div className='w-full h-screen flex flex-col ' >
            <div className='m-20 text-center' >
                <p className="text-7xl m-4 font-light" >500</p>
                {/* <p className="text-md text-gray-500 p-1" >Unauthorized</p> */}
                <p className="text-lg mb-4 font-thin" >This requested URL was not found on this server.</p>

                <Link href='/dashboard' className="underline text-blue-500 flex items-center justify-center gap-4" ><span><FaArrowLeftLong /></span> Return to Dashboard</Link>
            </div>

        </div>

    )
}
