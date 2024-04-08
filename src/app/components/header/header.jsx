"use client"
import React from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiSolidDownArrow } from "react-icons/bi";

export default function header() {

   const toggleSideBar = (e) => {
    document.querySelector(".side-bar").classList.toggle("show");
   }


    return (
        <div className='fixed w-full mx-auto top-0 header' >
            <div className=' bg-gray-600 container' >

                <div className='flex lg:flex-row items-center justify-between flex-row-reverse'>
                    <div className='flex md:flex-row-reverse text-white p-3 h-10 items-center w-10'  >
                        <button onClick={toggleSideBar} ><HiMenu  /></button>
                    </div>


                    <div className='flex items-center gap-0' >
                        <input
                            type='text'
                            placeholder='search'
                            className='m-2 border-0 rounded-tl-lg rounded-bl-lg outline-none mr-0'

                        />
                        <div className='bg-blue-600 p-3 mr-10 mt-0 border-0 rounded-tr-lg rounded-br-lg' >
                            <AiOutlineSearch />
                        </div>

                        {/* <div className='flex text-gray-300 p-3 mr-5 font-bold items-center' >
                            <CiUser />
                            <div className='ml-2 text-xs' >
                                <BiSolidDownArrow />
                            </div>
                        </div> */}

                        <label for="cars" className='text-white' > <CiUser /> </label>
                        <select className='h-5 w-2 bg-gray-600 outline-none border-0 text-white focus:outline-none focus:border-0 ' >
                            <option className='hover:bg-gray-700 bg-gray-500 border-0' value="volvo">Setting</option>
                            <option className='hover:bg-gray-700 bg-gray-500 border-0' value="saab">Profile</option>
                            <option className='hover:bg-gray-700 bg-gray-500 border-0' value="opel">Logout</option>
                        </select>

                    </div>

                </div>
            </div>
        </div>
    )
}
