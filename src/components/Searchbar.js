import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbar = () => {
  return (
    <div className="relative pl-4 my-4">
        <FaMagnifyingGlass className="absolute text-xl text-slate-400 inset-2.5 left-8"/>
        <input className="h-10 p-4 pl-10 rounded-3xl w-full max-w-full text-black text-xs" type="text" placeholder='search students by name' />
    </div>
  )
}

export default Searchbar