'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoLibrary } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const links=[
        {href:"/", title:"Books"},
        {href:"/createBook", title:"Add Book"},
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-700 p-4 border-b-2 border-slate-500 z-50">
                <div className="flex items-center justify-between">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md hover:bg-slate-600 transition-colors"
                    >
                        <IoLibrary size={24} className="text-slate-200"/>
                    </button>
                    <h1 className="text-xl font-bold">Library</h1>
                    <div className="w-10"></div>
                </div>
            </div>

            {/* Desktop Sidebar - Mevcut tasarımınız */}
            <nav className='hidden md:block w-64 h-screen bg-slate-700 border-r-2 border-slate-600'>
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

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeSidebar}
                />
            )}

            {/* Mobile Sidebar */}
            <div className={`md:hidden fixed top-0 left-0 h-full w-80 bg-slate-700 border-r-2 border-slate-500 transform transition-transform duration-300 ease-in-out z-50 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8 border-b-2 border-slate-600 pb-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold">Library</h2>
                            <IoLibrary size={28} className="text-slate-200"/>
                        </div>
                        <button
                            onClick={closeSidebar}
                            className="p-2 rounded-md hover:bg-slate-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <nav className="space-y-4">
                        {links.map((link) => (
                            <Link 
                                key={link.href}
                                href={link.href}
                                onClick={closeSidebar}
                                className="block p-4 text-xl font-medium rounded-xl hover:bg-slate-600 transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>

                    <Link 
                        href="https://github.com/evrnzhn04" 
                        onClick={closeSidebar}
                        className="absolute bottom-5 left-6 right-6 p-4 flex items-center justify-center gap-4 hover:bg-slate-600 rounded-xl transition-all duration-200"
                    >
                        <FaGithub size={24}/>
                        <p className="font-medium text-lg">evrenzhn04</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;