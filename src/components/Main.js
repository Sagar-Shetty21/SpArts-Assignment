import React from 'react'
import TopPanel from './TopPanel'
import MembersTable from './MembersTable'
import QuickActions from './QuickActions'
import FeeCard from './FeeCard'
import GrowthCard from './GrowthCard'
import ScheduleTable from './ScheduleTable'

const Main = ({setActive}) => {
  return (
    <div className="flex-grow overflow-y-scroll overflow-x-hidden p-2 lg:p-4 pt-1">
        <TopPanel setActive={setActive}/>

        <div className="grid grid-cols-2 gap-1">
          <MembersTable />
          <QuickActions />
        </div>

        <div className="grid grid-cols-2 gap-1 mt-1">
          <FeeCard />
          <GrowthCard />
        </div>

        <ScheduleTable />
    </div>
  )
}

export default Main