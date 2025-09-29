import React from 'react';

type CardProps = {
  title: string;
  author: string;
  publishedYear?: number | null;
};

const Card: React.FC<CardProps> = ({ title, author, publishedYear }) => {
  return (
    <div className="rounded-xl border-2 border-slate-600 p-3 md:p-4 
                    w-full md:w-[250px] h-[200px] md:h-[300px] 
                    bg-slate-800 shadow-md hover:shadow-lg 
                    hover:scale-105 md:hover:scale-110 
                    transition-transform duration-200 flex flex-col justify-between">
      
      {/* Başlık - Mobilde daha küçük */}
      <h2 className="text-lg md:text-2xl font-bold text-white text-center 
                     mt-2 md:mt-6 line-clamp-2 md:line-clamp-2">
        {title}
      </h2>
      
      {/* Yazar ve yayın yılı - Mobilde kompakt */}
      <div className="mt-auto mb-2 md:mb-4 text-center">
        <p className="text-sm md:text-lg italic text-slate-300 line-clamp-1">
          {author}
        </p>
        {publishedYear && (
          <p className="text-xs md:text-sm text-slate-400 mt-1 md:mt-2">
            Published: {publishedYear}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;