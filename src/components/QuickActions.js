import React from 'react'

const QuickActions = () => {
  return (
    <div className="p-2 bg-white border-2">
        <div className="text-xs text-slate-400 font-bold p-2">QUICK ACTIONS</div>
        <div className="flex justify-between items-center">
            <div className="bg-gray-600 rounded text-white p-1 px-4 flex items-center"><div className="mb-1 mr-1">+</div> Add new student</div>
            <button className="bg-gray-600 rounded text-white p-1.5 px-4 flex items-center">Collect Fees</button>
            <button className="bg-gray-600 rounded text-white p-1 px-4 flex items-center"><div className="mb-1 mr-1">+</div> Add new enquiry</button>
        </div>
    </div>
  )
}

export default QuickActions