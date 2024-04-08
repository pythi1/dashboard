
import Link from 'next/link';
import React from 'react';

export default function StaticComponent() {
    return (
       <div className='min-h-screen m-7  max-w-screen' >
        <div className='m-10' >
        <h1 className='text-4xl font-semibold mb-2' >Static Navigation</h1>
        <p> <a href='/dashboard' className='text-blue-500 underline' >Dashboard</a> <span className='text-gray-500' > / static Navigation </span> </p>
            
        </div>

        <div className='m-5 p-4 border rounded-lg ' >
                <p>This page is an example of using static navigation. By removing the .<span className='text-sm font-sans text-gray-500' >sb-nav-fixed</span> class from the <span className='text-sm font-sans text-gray-500' >body</span> , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example.

.</p>
            </div>
        
       </div>
    )
};
