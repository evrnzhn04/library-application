import React from 'react'
import { IoLibrary } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='w-64 h-screen bg-slate-700 border-r-2 border-slate-600'>
        <div className='p-8 flex flex-row items-center justify-center gap-3 border-b-2 border-slate-600 mx-4'>
            <h1 className='text-3xl font-bold text-slate-200 text-center'>Library</h1>
            <IoLibrary size={30} className='text-slate-200'/>
        </div>
    </nav>
  )
}

export default Navbar