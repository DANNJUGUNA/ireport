import React from 'react'
import { UsersIcon } from '@heroicons/react/24/outline'

function StatsDashboard() {
  const stats = [
    { id: 1, name: 'Total Reports', stat: '522', icon: UsersIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Red Flags', stat: '10,000', icon: UsersIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Interventions', stat: '1,000', icon: UsersIcon, change: '3.2%', changeType: 'decrease' },
    { id: 4, name: 'Pending Reports', stat: '1,000', icon: UsersIcon, change: '3.2%', changeType: 'decrease' },
  ]
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
          <div
          key={item.id}
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-5 shadow sm:px-6 sm:pt-6"
          >
          <dt>
              <div className="absolute rounded-md button p-3">
              <item.icon className="h-6 w-6 text-main2" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-main1">{item.stat}</p>
          </dd>
          </div>
      ))}
    </dl>
  )
}

export default StatsDashboard