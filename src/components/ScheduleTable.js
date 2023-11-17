import React, { useState, useEffect } from 'react'
import { CiFilter } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";


const ScheduleTable = () => {
    const [currentFilter, setCurrentFilter] = useState("All")
    const [currentTableData, setCurrentTableData] = useState([])
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_API_ENDPOINT}/schedule`)
            .then(response => response.json())
            .then(data => {
                setCurrentTableData(data.message);
                setTableData(data.message);
            })
            .catch(error => {
                console.error('Error fetching schedule data:', error);
        });
    },[])
        console.log("process")
    const handleClick = (tab) => {
        setCurrentFilter(tab);
        setCurrentTableData(tableData.filter(item => item.category === tab))
        if(tab === "All"){
            setCurrentTableData(tableData)
        }
    };

    return (
        <div className="border rounded bg-white w-full mt-1">
            <div className="flex items-center border">
                <div className="text-lg font-medium text-left p-2 flex-grow ml-2">UPCOMING SCHEDULE</div>
                <div className="flex items-center p-1 pr-2 flex-grow text-white">
                    <CiFilter className="text-2xl text-gray-600"/>
                    <div className={`p-1 w-28 m-2 rounded-lg text-center cursor-pointer ${currentFilter === 'All' ? 'bg-slate-600' : 'bg-slate-400'}`} onClick={() => handleClick("All")}>All</div>
                    <div className={`p-1 w-28 m-2 rounded-lg text-center cursor-pointer ${currentFilter === 'Classes' ? 'bg-slate-600' : 'bg-slate-400'}`} onClick={() => handleClick("Classes")}>Classes</div>
                    <div className={`p-1 w-28 m-2 rounded-lg text-center cursor-pointer ${currentFilter === 'Meetings' ? 'bg-slate-600' : 'bg-slate-400'}`} onClick={() => handleClick("Meetings")}>Meetings</div>
                    <div className={`p-1 w-28 m-2 rounded-lg text-center cursor-pointer ${currentFilter === 'Events' ? 'bg-slate-600' : 'bg-slate-400'}`} onClick={() => handleClick("Events")}>Events</div>
                </div>
                <div className="">
                    <BsThreeDots className="text-5xl text-gray-500 mr-2 cursor-pointer"/>
                </div>
            </div>
            <div className="border">
                {currentTableData.map((data, index) => (
                    <div key={index} className="grid grid-cols-10 w-full items-center p-2 justify-between">
                    
                        <div className="col-span-2 flex items-center p-2">
                            <input type="checkbox" />
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white ml-1 ${data.category === 'Classes' ? 'bg-slate-400' : data.category === 'Meetings' ? 'bg-slate-500' : 'bg-slate-600'}`}>{data.category[0]}</div>
                            <div className="ml-3 font-medium text-sm text-gray-700">{data.date}</div>
                        </div>
                        <div className="col-span-2 text-left font-medium text-sm text-gray-700">{data.time}</div>
                        <div className="col-span-3 text-gray-500 font-bold text-left">{data.subject}</div>
                        {data.extra ? <div className="col-span-1 text-red-500 border text-center border-dashed border-red-500 p-1 text-xs w-20">{data.extra}</div> : <div className="col-span-1 text-transparent">none</div>}
                    
                        <div className="col-span-2 inline-flex justify-end ">
                            <div className="text-gray-400 text-sm">{data.users}</div>
                            <a href="#" className="text-blue-600 ml-6 mr-2">View</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScheduleTable