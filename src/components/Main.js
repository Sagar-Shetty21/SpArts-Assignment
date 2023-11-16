import React from 'react'
import TopPanel from './TopPanel'
import MembersTable from './MembersTable'
import QuickActions from './QuickActions'
import FeeCard from './FeeCard'
import GrowthCard from './GrowthCard'
import ScheduleTable from './ScheduleTable'

const Main = () => {
  return (
    <div className="flex-grow overflow-y-scroll p-4 pt-1">
        <TopPanel />

        <div class="grid grid-cols-2 gap-1">
          <MembersTable />
          <QuickActions />
        </div>

        <div class="grid grid-cols-2 gap-1 mt-1">
          <FeeCard />
          <GrowthCard />
        </div>

        <ScheduleTable />
    </div>
  )
}

export default Main