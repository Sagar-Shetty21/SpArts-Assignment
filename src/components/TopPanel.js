import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";

const TopPanel = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                setUserData(data.results[0]);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
        });
    },[])
    
    return (
        <div className="flex items-center">
            <div className="flex-grow">
                <div className="text-4xl font-medium">Welcome {userData?.name?.first},</div>
                <div className="text-lg font-medium my-3">Here is a summary of your business</div>
            </div>
            <div className="flex">
                <IoSettingsOutline className="bg-gray-200 text-6xl m-2 p-4 rounded-full hover:bg-gray-400 cursor-pointer"/>
                <LuBellDot className="bg-gray-200 text-6xl m-2 p-4 rounded-full hover:bg-gray-400 cursor-pointer"/>
            </div>
            <div className="flex items-center ml-20">
                <img alt="profile-img" src={userData?.picture?.medium} className= "h-16 w-16 m-3 rounded-full"/>
                <div className="text-right">
                    <div className="text-2xl font-medium">{userData?.name?.first + " " + userData?.name?.last}</div>
                    <div>{userData.email}</div>
                </div>
            </div>
        </div>
    )
}

export default TopPanel