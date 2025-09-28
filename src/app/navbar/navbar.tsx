import Link from 'next/link';
import React from 'react'
import { IoLibrary } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links=[
        {href:"/", title:"Books"},
        {href:"/createBook", title:"Add Book"},
    ]
  return (
    <nav className='w-64 h-screen bg-slate-700 border-r-2 border-slate-600'>
        <div className='p-8 flex flex-row items-center justify-center gap-3 border-b-2 border-slate-600 mx-4'>
            <h1 className='text-3xl font-bold text-slate-200 text-center'>Library</h1>
            <IoLibrary size={30} className='text-slate-200'/>
        </div>

        <div className='flex flex-col justify-center mt-8'>
            {links.map((link)=>(
                <Link href={link.href} key={link.href}
                    className='text-center text-2xl font-medium p-2 mb-8 mx-2
                    rounded-xl hover:bg-slate-600 transition duration-200'
                >
                    {link.title}
                </Link>
            ))}
        </div>
        <Link href="https://github.com/evrnzhn04" className='absolute bottom-5 p-5 flex flex-row justify-center gap-4 w-64 hover:scale-105
                                 transition-all duration-200'>
            <FaGithub size={30}/>
            <p className='font-medium text-xl'>evrenzhn04</p>
        </Link>
    </nav>
  )
}

export default Navbar