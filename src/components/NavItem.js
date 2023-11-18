import React from 'react'

const NavItem = ({children, setActive}) => {
  return (
    <div className="p-4 pr-0 flex items-center font-medium hover:bg-gray-700 cursor-pointer" onClick={() => setActive(false)}>
        {children}
    </div>
  )
}

export default NavItem