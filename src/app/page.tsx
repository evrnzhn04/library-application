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
      <div className="bg-slate-700 p-8 border-b-2 border-slate-500 sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-center">Books</h1>
      </div>

      <div className="p-6 flex justify-center">
        <div className="p-6 flex flex-wrap justify-center gap-6">
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

      <footer className="mx-20 border-t-2 border-slate-500 p-6 mt-10 text-center text-slate-300 flex flex-col items-center gap-1">
        <p className="font-medium text-lg">This page is part of a Next.js + Neon DB CRUD tutorial.</p>
        <p className="font-medium text-sm">You can learn how to fetch, create, update, and delete books in a database</p>
        <p className="font-medium text-sm">while building a simple library management interface.</p>
        <p className="font-medium text-sm">2025</p>

      </footer>



    </main>
  );
}
