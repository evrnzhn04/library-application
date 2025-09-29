'use client';

import { useEffect, useState } from "react";
import Card from "./components/card";
import prisma from "./lib/db";

export default function Home() {
  const [books,setBooks]=useState<any[]>([]);
  const [loading,setLoading,]=useState(true);

  useEffect(()=>{
    async function fetchBooks(){
      try{
        const res = await fetch("/api/books",{method:"GET"});
        const json = await res.json();

        if(json.success){
          setBooks(json.data);
        }else{
          console.error(json.error);
        }
      }catch(error){
        console.error("Fetch error:", error);
      }finally {
        setLoading(false);
      }
    }

    fetchBooks();
  },[])

  if (loading) return <p className="text-center p-6">Loading...</p>;
  
  return (
    <main className="">
      {/* Desktop Header */}
      <div className="hidden md:block bg-slate-700 p-8 border-b-2 border-slate-500 sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-center">Books</h1>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden p-6 border-b-2 border-slate-400 mx-8">
        <h1 className="text-2xl font-bold mt-3 text-center">Books</h1>
      </div>

      {/* Books Grid - Mobilde 2 sütun, Desktop'ta orijinal tasarım */}
      <div className="p-6 flex justify-center">
        {/* Mobile Grid - 2 columns */}
        <div className="md:hidden grid grid-cols-2 gap-3 w-full max-w-md">
          {books.map((book) => (
            <Card
              key={book.id}
              title={book.title}
              author={book.author}
              publishedYear={book.publishedYear}
            />
          ))}
        </div>

        {/* Desktop Layout - Orijinal tasarım */}
        <div className="hidden md:flex p-6 flex-wrap justify-center gap-6">
          {books.map((book) => (
            <Card
              key={book.id}
              title={book.title}
              author={book.author}
              publishedYear={book.publishedYear}
            />
          ))}
        </div>
      </div>

      {/* Footer - Hem mobil hem desktop'ta göster */}
      <footer className="mx-4 md:mx-20 border-t-2 border-slate-500 p-4 md:p-6 mt-10 text-center text-slate-300 flex flex-col items-center gap-1">
        <p className="font-medium text-base md:text-lg">This page is part of a Next.js + Neon DB CRUD tutorial.</p>
        <p className="font-medium text-xs md:text-sm">You can learn how to fetch, create, update, and delete books in a database</p>
        <p className="font-medium text-xs md:text-sm">while building a simple library management interface.</p>
        <p className="font-medium text-xs md:text-sm">2025</p>
      </footer>
    </main>
  );
}