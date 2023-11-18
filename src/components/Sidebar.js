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

const Sidebar = ({active, setActive}) => {

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
        <>
            {active && <div class="fixed top-0 left-0 w-full h-full bg-slate-600 opacity-50 z-10 xl:hidden" onClick={() => setActive(false)}></div>}
            <div className={`z-20 h-screen flex flex-col absolute min-w-max ${active ? "" : "hidden xl:flex" } xl:static transition duration-150 ease-out`}>
                <div className="px-6 py-2 bg-slate-100">
                    <img className="w-52" src="/logo.png" alt="img"/>
                    <div className="text-center text-2xl">{getDate()}</div>
                </div>
                <div className="flex-grow bg-gray-600 text-white overflow-y-scroll">
                    <div className="p-4 font-bold mt-4">Main Menu</div>
                    <NavItem setActive={setActive}>
                        <MdBarChart className="text-2xl mr-4"/>
                        <span>Dashboard</span>
                    </NavItem>
                    <NavItem setActive={setActive}>
                        <FaBuildingUser className="text-2xl mr-4"/>
                        <span>Acadamy Management</span>
                    </NavItem>

                    <div className="p-4 font-bold mt-8">More</div>
                    <Searchbar />
                    <NavItem setActive={setActive}>
                        <PiStudentBold className="text-2xl mr-4"/>
                        <span>Students</span>
                    </NavItem>
                    <NavItem setActive={setActive}>
                        <FaMoneyBillAlt className="text-2xl mr-4"/>
                        <span>Fee Payment</span>
                    </NavItem>
                    <NavItem setActive={setActive}>
                        <HiUsers className="text-2xl mr-4"/>
                        <span>Enquiries</span>
                    </NavItem>
                    <NavItem setActive={setActive}>
                        <FaUserTie className="text-2xl mr-4"/>
                        <span>Coaches</span>
                    </NavItem>
                    <NavItem setActive={setActive}>
                        <SlCalender className="text-2xl mr-4"/>
                        <span>Schedule</span>
                    </NavItem>
                </div>
            </div>
        </>
    )
}

export default Sidebar