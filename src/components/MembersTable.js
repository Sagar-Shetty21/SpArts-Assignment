import React from 'react'

const MembersTable = () => {
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
                <td className="text-left text-2xl font-medium px-4 py-1">5000</td>
                <td className="text-right text-2xl font-medium px-4 py-1">5</td>
            </tr>
        </tbody>
    </table>
  )
}

export default MembersTable