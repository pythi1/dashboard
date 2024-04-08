import React from 'react';
import LineChart from '../charts/linechart/linechart.jsx';
import Barchart from '../charts/barchart/barchart.jsx';
import PieChart from '../charts/piechart/piechart.jsx'
import Link from 'next/link';

export default function chartComponent() {
    return (
        <div className='min-h-screen m-8 max-w-screen' >
            <div className='m-5 ' >
                <h1 className='text-4xl font-semibold mb-2' >Charts</h1>
                <p> <Link href='/dashboard' className='text-blue-500 underline cursor-pointer' >Dashboard</Link> <span className='text-gray-500' >/ charts</span> </p>
            </div>

            <div className='m-5 p-4 border rounded-lg ' >
                <p>Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official <span className='text-blue-500 underline cursor-pointer ' > <Link href='https://www.chartjs.org/docs/latest/' >Chart.js documentation</Link> </span> .</p>
            </div>


            <div className='flex flex-col' >

                <div className='' >
                    <LineChart />
                </div>

                <div className='grid grid-cols-2' >
                    <div  >
                        <Barchart />
                    </div>

                    <div >
                       <Barchart />
                    </div>

                </div>
            </div>
        </div>
    )
}
