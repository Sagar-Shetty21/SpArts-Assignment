import React, { useState, useEffect } from 'react'
import { Chart } from 'react-chartjs-2';
import { FaAngleDown } from "react-icons/fa6";
import { CategoryScale, Chart as ChartJS, LinearScale, ArcElement, BarElement, DoughnutController, BarController, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, DoughnutController, BarController, Tooltip);


const FeeCard = () => {

    const [feesData, setFeesData] = useState({
        labels: [],
        datasets: []
    })

    useEffect(() => {
        fetch(`https://dummy-data-api.vercel.app/fees`)
            .then(response => response.json())
            .then(data => {
                setFeesData(() => {
                    return {
                        labels: data.message?.map((data) => data.label),
                        datasets: [{
                            label: "",
                            data: data.message?.map((data) => data.value),
                            backgroundColor: ["rgb(74, 90, 99)", "rgb(237, 117, 113)"] 
                        }]
                    }
                })
            })
            .catch(error => {
                console.error('Error fetching fees data:', error);
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
            },
        },
    }

    return (
        <table className="border-2 p-2 rounded bg-white w-full">
            <thead className="border-2">
                <tr>
                    <th className="text-lg font-medium text-left p-4 pb-2">FEE PAYMENT SUMMARY</th>
                    <th className="text-right p-4 pb-2 flex justify-end items-center">
                        <select id="dropdown" className="border-2 p-1 appearance-none rounded-l px-4" name="dropdown">
                            <option value="option1">Last 30 days</option>
                            <option value="option2">Last 60 days</option>
                            <option value="option3">Last 90 days</option>
                        </select>
                        <label htmlFor="dropdown" className="border-2 border-l-0 p-1.5 rounded-r"><FaAngleDown className="text-gray-300 text-xl"/></label>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-4 py-1 w-full" colSpan="2">
                        <div className="h-60 flex justify-center">
                            <Chart type="doughnut" data={feesData} options={options}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="text-center px-4 py-1 flex-col">
                        <div className="flex items-center justify-center">
                            <div className="h-3 w-3 bg-gray-600 rounded"></div>
                            <div className="text-xs text-gray-500 p-2">AMOUNT RECEIVED</div>
                        </div>
                        <div className="text-lg"><span className="text-2xl font-medium">₹624,000</span> by 400 students</div>
                    </td>
                    <td className="text-center px-4 py-1 flex-col">
                        <div className="flex items-center justify-center">
                            <div className="h-3 w-3 bg-rose-400 rounded"></div>
                            <div className="text-xs text-gray-500 p-2">AMOUNT PENDING</div>
                        </div>
                        <div className="text-lg"><span className="text-2xl font-medium">₹334,000</span> by 123 students</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default FeeCard