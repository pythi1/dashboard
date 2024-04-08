'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa6";
import { FaTable } from "react-icons/fa6";

export default function sidebar() {
    const [layoutdropdown, setlayoutdropdown] = useState(false);
    const [pagesdropdown, setpagesdropdown] = useState(false);
    const [authdropdown, setauthdropdown] = useState(false);
    const [errordropdown, seterrordropdown] = useState(false);

       return (
        <div className='flex flex-col w-60 bg-gray-900 h-[100vh] fixed justify-between side-bar' >

            <div  >
                <div className='bg-gray-600' >
                    <p className='text-white font-semibold p-4' >START BOOTSTRAP</p>
                </div>
                <div className='m-3 text-gray-400 ' >
                    <p className='text-xs p-2 text-gray-500 font-bold' >CORE</p>
                    <Link className='hover:text-white p-2 flex  items-center gap-2' href='/dashboard'><span  ><AiOutlineDashboard /></span> Dashboard</Link>
                </div>

                <div className='m-3 text-gray-400 flex flex-col gap-3'>
                    <p className='text-xs p-2 text-gray-500 font-bold' >INTERFACE</p>

                    <div>
                        <div className='flex flex-row items-center justify-between pr-4 hover:text-white w-full p-2' >
                            <button className='flex items-center gap-2' onClick={() => { setlayoutdropdown(!layoutdropdown); setpagesdropdown(false) }}> <span><BsLayoutTextWindow /></span> Layouts</button>
                            <span> <IoIosArrowForward className={layoutdropdown ? 'transform rotate-90 duration-500' : null} /> </span>

                        </div>
                        {layoutdropdown ?
                            <div className='transform duration-1000 p-3' >
                                <ul>
                                    <li className='p-2 hover:text-white'>
                                        <Link href='/components/staticnavigation' >Static dashboard</Link>
                                    </li>
                                    <li className='p-2 hover:text-white'>
                                        <Link href='#' >Dyanamic dashboard</Link>
                                    </li>
                                </ul>
                            </div>

                            :
                            null
                        }
                    </div>

                    <div>
                        <div className='flex flex-row items-center justify-between pr-4 hover:text-white w-full p-2' >
                            <button className='flex items-center gap-2' onClick={() => { setpagesdropdown(!pagesdropdown); setlayoutdropdown(false) }}><span><FaBookOpen /></span> Pages</button>
                            <span> <IoIosArrowForward className={pagesdropdown ? 'transform rotate-90 duration-500' : null} /> </span>

                        </div>
                        {pagesdropdown ?
                            <div className='transform duration-1000 p-3' >
                                <ul>
                                    <li className='p-2' >
                                        <div>
                                            <div className='flex flex-row items-center justify-between pr-4 hover:text-white w-full p-2' >
                                                <button onClick={() => { setauthdropdown(!authdropdown); seterrordropdown(false) }} >Authentication</button>
                                                <span> <IoIosArrowForward className={authdropdown ? 'transform rotate-90 duration-500' : null} /> </span>

                                            </div>

                                            {authdropdown ?
                                                <div className='transform duration-1000 p-3' >
                                                    <ul>
                                                        <li className='p-2 hover:text-white'>
                                                            <Link href='/authentication/login' >Login</Link>
                                                        </li>
                                                        <li className='p-2 hover:text-white'>
                                                            <Link href='/authentication/register' >Register</Link>
                                                        </li>
                                                        <li className='p-2 hover:text-white'>
                                                            <Link href='/authentication/forgotpassword' >Forgot Password</Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                :
                                                null
                                            }


                                        </div>
                                    </li>
                                    <li className='p-2'>
                                        <div>
                                            <div className='flex flex-row items-center justify-between pr-4 hover:text-white w-full p-2' >
                                                <button onClick={() => { seterrordropdown(!errordropdown); setauthdropdown(false) }} >error</button>
                                                <span> <IoIosArrowForward className={errordropdown ? 'transform rotate-90 duration-500' : null} /> </span>

                                            </div>

                                            {errordropdown ?
                                                <div className='transform duration-1000 p-3' >
                                                    <ul>
                                                        <li className='p-2 hover:text-white'>
                                                            <Link
                                                                
                                                                href='/components/error/unauthorised'
                                                            >
                                                                    401
                                                            </Link>
                                                        </li>
                                                        <li className='p-2 hover:text-white'>
                                                            <Link href='/components/error/notfound' >404 Page</Link>
                                                        </li>
                                                        <li className='p-2 hover:text-white'>
                                                            <Link href='/components/error/servererror' >500 Page</Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                :
                                                null
                                            }


                                        </div>
                                    </li>
                                </ul>
                            </div>

                            :
                            null
                        }
                    </div>
                </div>

                <div className='m-3 text-gray-400 font-semibold flex flex-col gap-3'>
                    <p className='text-xs p-2 text-gray-500 font-bold' >ADDONS</p>
                    <Link className='hover:text-white p-2 flex items-center gap-2' href='/components/chartpage' > <span><FaChartArea /></span> Charts</Link>
                    <Link className='hover:text-white p-2 flex items-center gap-2' href='/components/table' > <span><FaTable /></span> Tables</Link>
                </div>

            </div>


            <div className=' text-gray-400 bg-gray-800 ' >
                <div className='m-4 ' >
                    <p className='text-xs' >Logged in as:</p>
                    <p>Start Bootstrap</p>

                </div>
            </div>


        </div>
    )
}
