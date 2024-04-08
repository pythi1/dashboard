"use client"
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function UnauthorisedError () {
    return (
        <div className='w-full h-screen flex flex-col ' >
        <div className='m-20 text-center' >
            <p className="text-7xl m-4 font-light" >401</p>
            <p className="text-md text-gray-500 p-1" >Unauthorized</p>
            <p className="text-lg mb-4" >Access to this resource is denied.</p>

            <Link href='/dashboard' className="underline text-blue-500 flex items-center justify-center gap-4" ><span><FaArrowLeftLong /></span> Return to Dashboard</Link>
        </div>
        
    </div>
    )
}