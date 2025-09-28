'use client';
import React, { useState } from 'react';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        author,
        publishedYear: publishedYear ? parseInt(publishedYear) : null,
      }),
    });

    setTitle('');
    setAuthor('');
    setPublishedYear('');
  };

  return (
    <main className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-slate-700 p-8 border-b-2 border-slate-500 sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-center">Create a Book</h1>
      </div>

      {/* Form */}
      <div className="flex-1 flex justify-center items-start p-6 overflow-auto">
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-6">
          <div className="rounded-xl border-2 border-slate-600 p-4 w-[550px] h-[700px] bg-slate-800 flex flex-col justify-between">
            <input
              className="text-3xl font-bold text-white text-center p-2 bg-slate-800"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <div className="flex flex-col text-center mt-auto mb-4 gap-2">
              <input
                className="text-xl italic text-slate-300 p-2 text-center bg-slate-800"
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
              <input
                className="text-lg text-slate-400 p-2 text-center bg-slate-800"
                type="number"
                placeholder="Published Year"
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="p-4 bg-blue-600 font-medium text-2xl text-white rounded mt-2"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateBook;
