import React from 'react'
import NavItem from './NavItem';
import { MdBarChart } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Searchbar from './Searchbar';

const Sidebar = () => {

    const getDate = () => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        const currentDate = new Date();
        const dayOfWeek = days[currentDate.getUTCDay()];
        const dayOfMonth = ('0' + currentDate.getUTCDate()).slice(-2);
        const month = months[currentDate.getUTCMonth()];
        
        return `${dayOfWeek}, ${dayOfMonth} ${month}`;
    }

    return (
        <div className="h-screen w-60 flex flex-col min-w-max">
            <div className="px-6 py-2">
                <img className="w-52" src="/logo.png" />
                <div className="text-center text-2xl">{getDate()}</div>
            </div>
            <div className="flex-grow bg-gray-600 text-white overflow-y-scroll">
                <div className="p-4 font-bold mt-4">Main Menu</div>
                <NavItem>
                    <MdBarChart className="text-2xl mr-4"/>
                    <span>Dashboard</span>
                </NavItem>
                <NavItem>
                    <FaBuildingUser className="text-2xl mr-4"/>
                    <span>Acadamy Management</span>
                </NavItem>

                <div className="p-4 font-bold mt-8">More</div>
                <Searchbar />
                <NavItem>
                    <PiStudentBold className="text-2xl mr-4"/>
                    <span>Students</span>
                </NavItem>
                <NavItem>
                    <FaMoneyBillAlt className="text-2xl mr-4"/>
                    <span>Fee Payment</span>
                </NavItem>
                <NavItem>
                    <HiUsers className="text-2xl mr-4"/>
                    <span>Enquiries</span>
                </NavItem>
                <NavItem>
                    <FaUserTie className="text-2xl mr-4"/>
                    <span>Coaches</span>
                </NavItem>
                <NavItem>
                    <SlCalender className="text-2xl mr-4"/>
                    <span>Schedule</span>
                </NavItem>
            </div>
        </div>
    )
}

export default Sidebar