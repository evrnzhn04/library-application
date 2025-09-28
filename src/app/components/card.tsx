import React from 'react';

type CardProps = {
  title: string;
  author: string;
  publishedYear?: number | null;
};

const Card: React.FC<CardProps> = ({ title, author, publishedYear }) => {
  return (
    <div className="rounded-xl border-2 border-slate-600 p-4 w-[250px] h-[300px] m-4 bg-slate-800 
                    shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 flex flex-col justify-between
                    ">
      {/* Başlık ortada */}
      <h2 className="text-2xl font-bold text-white text-center mt-6 line-clamp-2">{title}</h2>
      
      {/* Yazar ve yayın yılı alt kısım */}
      <div className="mt-auto mb-4 text-center">
        <p className="text-lg italic text-slate-300">{author}</p>
        {publishedYear && (
          <p className="text-sm text-slate-400 mt-2">
            Published: {publishedYear}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
