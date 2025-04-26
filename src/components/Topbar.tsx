"use client"
import React from 'react'
import { AlignJustify, Settings } from 'lucide-react' 
import Image from 'next/image' 
import { useStore } from '@/store/store'

export default function Topbar() {

  const {setSideBarOpen} = useStore();

  return (
    <div className='bg-white shadow-sm py-3 px-6 flex justify-between sm:justify-end items-center gap-5 w-full'>
      <button className='sm:hidden flex' onClick={()=>setSideBarOpen()}><AlignJustify/></button>
        <div className='flex justify-end gap-5'>
        <button className='text-gray-500 hover:text-gray-700'>
            <Settings className='w-5 h-5' />
        </button>
        <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
            <Image
                src="/profile.png" 
                alt="User Profile"
                width={36}
                height={36}
                className='object-cover'
            />
        </div>
        </div>
    </div>
  )
}