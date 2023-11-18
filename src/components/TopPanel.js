import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const TopPanel = ({setActive}) => {
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
            <div className="cursor-pointer" onClick={() => setActive(true)}>
                <GiHamburgerMenu className="text-5xl lg:text-7xl pr-4 xl:hidden" />
            </div>
            <div className="flex-grow">
                <div className="text-lg lg:text-4xl font-medium">Welcome {userData?.name?.first},</div>
                <div className="text-xs lg:text-lg font-medium xl:my-2">Here is a summary of your business</div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <IoSettingsOutline className="bg-gray-200 text-2xl m-1 p-1 lg:text-6xl lg:m-2 lg:p-4 rounded-full hover:bg-gray-400 cursor-pointer"/>
                <LuBellDot className="bg-gray-200 text-2xl m-1 p-1 lg:text-6xl lg:m-2 lg:p-4 rounded-full hover:bg-gray-400 cursor-pointer"/>
            </div>
            <div className="flex items-center lg:ml-20">
                <img alt="profile-img" src={userData?.picture?.medium} className= "h-10 w-10 lg:h-16 lg:w-16 m-3 rounded-full"/>
                <div className="text-right hidden lg:block">
                    <div className="text-2xl font-medium">{userData?.name?.first + " " + userData?.name?.last}</div>
                    <div>{userData.email}</div>
                </div>
            </div>
        </div>
    )
}

export default TopPanel