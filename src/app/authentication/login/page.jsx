import Link from "next/link";



export default function LoginPage() {
    return (
        <div className="flex justify-center flex-col items-center bg-blue-600 min-h-screen lg:text-2xl " >
            <div className="flex justify-center flex-col items-center max-h-screen h-fit w-[90%] mx-auto my-auto lg:rounded-xl border rounded-xl bg-white lg:w-1/2">

                <h1 className="lg:text-5xl bg-slate-100 font-bold border-b-2 rounded-xl rounded-br-none rounded-bl-none border-gray-300 mx-auto w-full lg:mb-10 lg:p-10 p-5 text-center" >Login</h1>
                <div className="flex flex-col my-auto h-full w-full" >

                    <form className='flex flex-col flex-1' >
                        <div className="flex flex-col gap-5 m-5" >

                            <input className="p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl" id="email" placeholder="Email address" type="email" />

                            <input
                                type='password'
                                placeholder='Password'

                                id="password"
                                className='p-6 h-15 border-gray-300 rounded-lg bg-gray-100 w-full text-lg lg:text-2xl'
                            />
                        </div>
                        <div className="flex items-center gap-2 flex-1 p-4 ">

                            <input id="checkbox" className='rounded border-teal-700 border focus:bg-blue-600  ' type="checkbox" />
                            <p className='' >remember password</p>
                        </div>
                    </form>
                    <div className='flex flex-row justify-between items-center m-5 lg:text-2xl' >
                        <a href='/authentication/forgotpassword' className='underline text-blue-500 '>Forgot your Password</a>

                        <a href='/dashboard' className='border rounded-lg p-3 font-semibold bg-blue-500' >Login</a>
                    </div>
                    <div className='bg-slate-100 items-center flex border-gray-300 justify-center border-t-2 rounded-xl rounded-tl-none rounded-tr-none'>
                        <Link href='/authentication/register' className="  mb-5 p-5 pt-7 underline text-blue-500" > Need an account? signup </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}