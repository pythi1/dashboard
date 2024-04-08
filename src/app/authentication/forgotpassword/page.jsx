import React from 'react'

export default function forgotpassword() {
  return (
    <div className="flex justify-center flex-col items-center bg-blue-600 min-h-screen lg:text-2xl " >
      <div className="flex justify-center flex-col items-center max-h-screen h-fit border-yellow-400-400 w-[90%] mx-auto my-auto lg:rounded-xl border rounded-xl bg-white lg:w-1/2">

        <h1 className="lg:text-5xl bg-slate-100 font-bold border-b-2 rounded-xl rounded-br-none rounded-bl-none border-gray-300 mx-auto w-full lg:mb-10 lg:p-10 p-5 text-center" >Forgot Password</h1>
        <div className="flex flex-col my-auto h-full" >

          <form className='flex flex-col flex-2' >


            <div className="flex flex-col gap-5 m-5">

              <label className='text-gray-400 text-lg lg:text-2xl' >Enter your email address and we will send you a link to reset your password.</label>

              <input id="email" className=" p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl" placeholder='email address' type="email" />

            </div>

    

          </form>
          <div className='flex flex-row justify-between items-center m-5' >
                <a href='/authentication/login' className='underline text-blue-500 '>retrun to login</a>

                <a href='/dashboard' className='border rounded-lg p-3 font-semibold bg-blue-500' >Reset Password</a>
            </div>
          <div className='bg-slate-100 items-center flex border-gray-300 justify-center border-t-2 rounded-xl rounded-tl-none rounded-tr-none'>
            <a href='/authentication/register' className=" mb-5 p-3 underline text-blue-500" > Need an account? signup </a>
          </div>
        </div>
      </div>
    </div>
  )
}
