import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = () => {
  return (
    <div className='text-white p-10 flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 via-purple-800 to-blue-600'>
      <h2 className='text-3xl font-bold '>Browse all template</h2>
      <p>what  would you like to create today</p>
      <div className='w-full flex justify-center'>
        <div className='flex items-center gap-2 rounded-md p-2 border bg-white my-3 w-[50%]'>
          <Search className='text-primary'/>
          <input type="text" placeholder='search' className='bg-transparent w-full outline-none text-black'/>
        </div>

      </div>
    </div>
  )
}

export default SearchSection