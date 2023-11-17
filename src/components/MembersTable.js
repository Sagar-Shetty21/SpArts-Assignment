import React, { useState, useEffect } from 'react'

const MembersTable = () => {

    const [membersData, setMembersData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/members`)
            .then(response => response.json())
            .then(data => {
                setMembersData(data.message);
            })
            .catch(error => {
                console.error('Error fetching schedule data:', error);
        });
    },[])

    return (
        <table className="border-2 p-2 rounded bg-white">
            <thead className="border-2">
                <tr>
                    <th className="text-xs text-slate-400 font-bold text-left p-4 pb-2">ACTIVE STUDENTS</th>
                    <th className="text-xs text-slate-400 font-bold text-right p-4 pb-2">ACTIVE COACHES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-left text-2xl font-medium px-4 py-1">{membersData.students}</td>
                    <td className="text-right text-2xl font-medium px-4 py-1">{membersData.coaches}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default MembersTable