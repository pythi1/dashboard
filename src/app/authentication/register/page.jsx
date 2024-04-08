import React from 'react'

export default function RegisterPage() {
    return (
        <div className="flex justify-center flex-col items-center bg-blue-600 min-h-screen lg:text-2xl " >
        <div className="flex justify-center flex-col items-center max-h-screen h-fit w-[90%] mx-auto my-auto lg:rounded-xl border rounded-xl bg-white lg:w-1/2">
  
        <h1 className="lg:text-5xl bg-slate-100 font-bold border-b-2 rounded-xl rounded-br-none rounded-bl-none border-gray-300 mx-auto w-full lg:mb-10 lg:p-10 p-5 text-center" >Create Account</h1>
        <div className="flex flex-col my-auto h-full w-full" >

                    <form className='flex flex-col flex-2' >



                        <div className='flex flex-row gap-5 m-5 mt-1 mb-1'>
                            <input
                                className="mr-2 p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl "
                                id="fname" placeholder="First name" type="text" />

                            <input
                                type='text'
                                placeholder='last name'
                                id="lname" 
                                className='p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl'
                            />
                        </div>

                        <div className="flex m-5 mb-1">

                            <input id="email" className="mt-4 mb-4 p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl" placeholder='email address' type="email" />

                        </div>

                        <div className='flex flex-row gap-5 m-5' >

                            <input
                                className="mr-2 p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl"
                                id="password" placeholder="password" type="text" />

                            <input
                                type='text'
                                placeholder='confirm password'
                                id="lname"
                                className=' p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl'
                            />

                        </div>

                    </form>
                    <div className='items-center m-5' >

                        <a href='/authentication/login' ><button type='' className='border rounded-lg p-3 text-2xl text-white w-full bg-blue-500' >Create Account</button></a>
                    </div>
                    <div className='bg-slate-100 items-center flex border-gray-300 justify-center border-t-2 rounded-xl rounded-tl-none rounded-tr-none'>
                        <a href='/authentication/login' className=" mb-5 p-3 text-2xl underline text-blue-500" > Have an account? go to login </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
