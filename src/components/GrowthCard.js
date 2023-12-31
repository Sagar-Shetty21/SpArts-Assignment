import React, { useState, useEffect } from 'react'
import { Chart } from 'react-chartjs-2';
import { FaRegCircleDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { CategoryScale, Chart as ChartJS, LinearScale, ArcElement, BarElement, DoughnutController, BarController, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, DoughnutController, BarController, Tooltip);


const GrowthCard = () => {
    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets: [{
            label: "Fee Received",
            data: [],
            backgroundColor: "rgb(74, 90, 99)" 
        }]
    })

    const [studentsData, setStudentsData] = useState({
        labels: [],
        datasets: [{
            label: "Active Students",
            data: [],
            backgroundColor: "rgb(110, 123, 130)"
        }]
    })

    useEffect(() => {
        fetch(`https://dummy-data-api.vercel.app/revenue`)
            .then(response => response.json())
            .then(data => {
                setRevenueData(() => {
                    return {
                        labels: data.message?.map((obj) => obj.month),
                        datasets: [{
                            label: "Fee Received",
                            data: data.message?.map((obj) => obj.value),
                            backgroundColor: "rgb(74, 90, 99)" 
                        }]
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching revenue data:', error);
        });
        fetch(`https://dummy-data-api.vercel.app/students`)
            .then(response => response.json())
            .then(data => {
                setStudentsData(() => {
                    return {
                        labels: data.message?.map((data) => data.month),
                        datasets: [{
                            label: "Active Students",
                            data: data.message?.map((data) => data.value),
                            backgroundColor: "rgb(110, 123, 130)"
                        }]
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching students data:', error);
        });
    },[])

    var options = {
        scales: {
            x: {
                grid: {
                    display: false
                },
            },
            y: {
                grid: {
                    display: false
                },
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
    }
    
    return (
        <table className="table-fixed border-2 p-2 rounded bg-white w-full col-span-2 lg:col-span-1">
            <thead className="border-2">
                <tr>
                    <th className="text-sm md:text-lg font-medium text-left p-4 pb-2">MONTH-ON-MONTH GROWTH</th>
                    <th className="p-4 pb-2 flex items-center justify-end">
                        <select id="dropdown2" className="border-2 p-1 appearance-none rounded-l px-2 md:px-4" name="dropdown2">
                            <option value="option1">Last 3 months</option>
                            <option value="option2">Last 6 months</option>
                            <option value="option3">Last 12 months</option>
                        </select>
                        <label htmlFor="dropdown2" className="border-2 border-l-0 p-1.5 rounded-r"><FaAngleDown className="text-gray-300 text-xl"/></label>
                        <FaRegCircleDown className="text-3xl text-gray-500 ml-12 cursor-pointer hidden md:block"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="m-12 ">
                    <td className="text-left px-4 py-1 relative">
                        <div className="text-sm text-gray-500 font-medium p-2">Revenue</div>
                        <Chart type='bar' data={revenueData} options={options} />
                        <div className="flex items-center justify-center py-4">
                            <div className="h-3 w-3 bg-gray-600 rounded"></div>
                            <div className="text-xs text-gray-500 p-2">FEE RECEIVED</div>
                        </div>
                        <div className=" absolute right-0 top-4 bottom-4 w-px bg-slate-300 "></div>
                    </td>
                    <td className="text-left px-4 py-1">
                        <div className="text-sm text-gray-500 font-medium p-2">Students</div>
                        <Chart type='bar' data={studentsData} options={options}/>
                        <div className="flex items-center justify-center py-4">
                            <div className="h-3 w-3 bg-gray-500 rounded"></div>
                            <div className="text-xs text-gray-500 p-2">ACTIVE STUDENTS</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default GrowthCard