import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";

const TopPanel = () => {
    return (
        <div className="flex items-center">
            <div className="flex-grow">
                <div className="text-4xl font-medium">Welcome Cynthia,</div>
                <div className="text-lg font-medium my-3">Here is a summary of your business</div>
            </div>
            <div className="flex">
                <IoSettingsOutline className="bg-gray-200 text-6xl m-2 p-4 rounded-full hover:bg-gray-400 cursor-pointer"/>
                <LuBellDot className="bg-gray-200 text-6xl m-2 p-4 rounded-full hover:bg-gray-400 cursor-pointer"/>
            </div>
            <div className="flex items-center ml-20">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className= "h-16 w-16 m-3 rounded-full"/>
                <div className="text-right">
                    <div className="text-2xl font-medium">Cynthia John</div>
                    <div>cj@example.com</div>
                </div>
            </div>
        </div>
    )
}

export default TopPanel