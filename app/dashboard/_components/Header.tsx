import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex gap-2 p-2 border items-center  rounded-md'>
        <Search />
        <Input type="text" placeholder="Search..." className='outline-none max-w-md'/>
      </div>
      <div>
        <h2 className='bg-primary px-5 py-3 rounded-full text-xs text-white'>Join Membership just for $399/month</h2>
      </div>
    </div>
  )
}

export default Header