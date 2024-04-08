import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function tab() {
    return (
        <div className="m-10 w-full mx-auto" >
            <div className="m-3" >
                <h1 className="text-4xl font-semibold" >Dashboard</h1>
                <p className="text-gray-500" >Dashboard</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 " >

                <div className="flex flex-col border flex-auto border-gray-600 m-3 rounded " >
                    <a href="#" className="text-sm p-5 border-b border-gray-600 bg-blue-600 rounded-tr rounded-tl text-white " >Primary</a>

                    <div className="w-full bg-blue-600 flex flex-row justify-between items-center" >
                        <a href="#" className="underline text-xs pl-3 pb-2 pt-2 rounded-br rounded-bl  text-white" >View Details</a>
                        <p> <IoIosArrowForward className="text-white" /> </p>

                    </div>

                </div>

                <div className="flex flex-col flex-auto border border-gray-600 m-3 rounded " >
                    <a href="#" className="text-sm p-5 border-b border-gray-600 bg-yellow-400 rounded-tr rounded-tl text-white " >Warning Card</a>

                    <div className="w-full bg-yellow-400 flex flex-row justify-between items-center" >
                        <a href="#" className="underline text-xs pl-3 pb-2 pt-2 rounded-br rounded-bl  text-white" >View Details</a>
                        <p> <IoIosArrowForward className="text-white" /> </p>

                    </div>

                </div>

                <div className="flex flex-col flex-auto border border-gray-600  m-3 rounded " >
                    <a href="#" className="text-sm p-5 border-b border-gray-600 bg-green-500 rounded-tr rounded-tl text-white " >Success Card</a>

                    <div className="w-full bg-green-500 flex flex-row justify-between items-center" >
                        <a href="#" className="underline text-xs pl-3 pb-2 pt-2 rounded-br rounded-bl  text-white" >View Details</a>
                        <p> <IoIosArrowForward className="text-white" /> </p>

                    </div>

                </div>

                <div className="flex flex-col flex-auto border border-gray-600 m-3 rounded " >
                    <a href="#" className="text-sm p-5 border-b border-gray-600 bg-red-600 rounded-tr rounded-tl text-white " >Danger Card</a>

                    <div className="w-full bg-red-600 flex flex-row justify-between items-center" >
                        <a href="#" className="underline text-xs pl-3 pb-2 pt-2 rounded-br rounded-bl  text-white" >View Details</a>
                        <p> <IoIosArrowForward className="text-white" /> </p>

                    </div>

                </div>


            </div>
        </div >
    )
}
