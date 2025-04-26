import React from 'react'
import AccountProgress from './progressSections/AccountProgress'
import FinancialWellbeing from './progressSections/FinancialWellbeing'
import TotalFranchises from './progressSections/TotalFranchises'
import KeyInsights from './progressSections/KeyInsights'
import ProspectLeads from './progressSections/ProspectLeads'

function Progress() {
  return (
    <div className='grid grid-cols-3'>
        <div className='col-span-1'>
             <AccountProgress/>
        </div>
        <div className='col-span-1'>
            <div className='grid grid-rows-2'>
                <div className='row-span-1'>
                    <TotalFranchises/>
                </div>
                <div className='row-span-1'>
                    <FinancialWellbeing/>
                </div>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='grid grid-rows-2'>
                <div className='row-span-1'>
                    <KeyInsights/>
                </div>
                <div className='row-span-1'>
                    <ProspectLeads/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress
