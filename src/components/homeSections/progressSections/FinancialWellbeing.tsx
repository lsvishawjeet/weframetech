import { TrendingUp } from 'lucide-react'
import React from 'react'

function FinancialWellbeing() {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-full flex flex-col justify-between">
    <div className="flex items-start justify-between border-b border-gray-200 pb-6">
      <div className='w-full'>
        <h2 className="text-lg font-semibold text-gray-900">Financial Wellbeing</h2>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">20</p>
            <p className="text-sm text-gray-500">Total Franchisees</p>
          </div>
          <span className="flex items-center text-xs text-green-600 border border-green-600 bg-white px-2 py-1 rounded-xl font-medium mt-1">
            <TrendingUp className="w-3 h-3 mr-1" /> 
            2.1%
          </span>
        </div>
      </div>
    </div>

    <div className="flex h-full">
      <div className='flex flex-row justify-between w-full py-4'>
      <div className="bg-gray-50 p-4 rounded-lg text-center w-[48%] flex flex-col justify-around ">
        <p className="text-sm text-gray-500 font-medium">Target</p>
        <p className="text-lg font-semibold text-gray-900 mt-1">$500,000</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center w-[48%] flex flex-col justify-around ">
        <p className="text-sm text-gray-500 font-medium">Current</p>
        <p className="text-lg font-semibold text-gray-900 mt-1">$450,000</p>
      </div>
    </div>
    </div>
  </div>
  )
}

export default FinancialWellbeing