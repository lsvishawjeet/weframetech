import Image from 'next/image'
import React from 'react'

const leads = [
  {
    name: 'Wade Warren',
    image: '/avatars/wade.svg', 
    stage: 'Initial Inquiry',
  },
  {
    name: 'Ava Wright',
    image: '/avatars/ava.svg', 
    stage: 'Initial Inquiry',
  },
  {
    name: 'Cody Fisher',
    image: '/avatars/cody.svg',
    stage: 'Initial Inquiry',
  },
]

function ProspectLeads() {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Prospect Leads</h2>
      <div className="space-y-3">
        {leads.map((lead, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <Image src={lead.image} alt={lead.name} className="w-9 h-9 rounded-full object-cover" height={36} width={36}/> 
              <span className="font-medium text-sm text-gray-800">{lead.name}</span>
            </div>
            <span className="text-xs text-gray-500">Stage: {lead.stage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProspectLeads