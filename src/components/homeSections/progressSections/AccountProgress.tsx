
import React from 'react'
import CircularProgress from '@/components/charts/CircularProgress'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

function AccountProgress() {
  return (

    <div className="bg-white rounded-xl shadow p-6 h-full flex flex-col justify-around">
      <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">Account Progress</h2>

      {/* Progress chart  */}
      <div className="flex justify-center mb-6 pb-6 border-b border-gray-200">
        <CircularProgress percentage={85} />
      </div>

      {/* completed steps  */}
      <div className="mb-4 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Steps Completed</h3>
        <ul className="space-y-2 text-sm"> 
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              Profile Setup
            </div>
            <Image alt='icon' src={"/icons/checkicon.svg"} height={16} width={16}/>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              Initial Training
            </div>
            <Image alt='icon' src={"/icons/checkicon.svg"} height={16} width={16}/>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              Legal Documents
            </div>
            <Image alt='icon' src={"/icons/checkicon.svg"} height={16} width={16}/>
          </li>
        </ul>
      </div>

      {/* Steps Remaining */}
      <div className='bg-gray-50 p-4 rounded-lg'>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Steps Remaining</h3>
        <ul className="space-y-2 text-sm"> 
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              Financial Integration
            </div>
            <Image alt='icon' src={"/icons/checkicon.svg"} className='opacity-40' width={16} height={16}/>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              Final Review
            </div>
            <Image alt='icon' src={"/icons/checkicon.svg"} className='opacity-40' width={16} height={16}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AccountProgress
