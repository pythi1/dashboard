'use client'

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FaChartArea } from "react-icons/fa";
import { Chart } from 'chart.js';
import {
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,

} from 'chart.js';
import Link from 'next/link';
import moment from 'moment';
import { WiTime3 } from "react-icons/wi";

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
)


export default function barchart() {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: "Revenue",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [4215, 5312, 6251, 7841, 9821, 14984],
        }],
    }

    const options = {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }


    return (
        <div className='h-full scroll-auto ' >

            <div className='m-5 border-2 border-gray-300 rounded-lg' >


                <div className=' flex items-center flex-auto gap-2 border-b-2 border-gray-300 p-2 rounded-tl-lg rounded-tr-lg bg-gray-200' >

                    <span> <FaChartArea /> </span>
                    <h1>Area chart example</h1>
                </div>

                <Bar
                    data={data}
                    options={options}
                    className='p-3'
                />

                <div className='flex items-center gap-2 border-t-2 border-gray-300 p-2 rounded-bl-lg rounded-br-lg bg-gray-200' >

                    <span> <WiTime3 /> </span>
                    <h1>{moment().fromNow()}</h1>

                </div>

            </div>
            <div>
            </div>
        </div>
    );
}
