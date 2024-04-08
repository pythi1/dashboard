import React from 'react'

export default function footer() {
  return (
    <div className=' bg-slate-100 min-w-full bottom-0' >
      <div className='flex flex-row justify-between p-6' >
        <div>
            <p>Copyright &copy; Your website 2023</p>
        </div>
        <div className='underline text-blue-500 cursor-pointer' >
            <a className='mr-3' >Privacy Policy</a>
            <a>Terms & Conditions</a>
        </div>

      </div>
    </div>
  )
}
