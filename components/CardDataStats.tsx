import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  post: string;
  title: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  key,
  title,
  post,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  const router = useRouter();
  const handleClick = (key) => {
   return router.push(`/post/${title}`);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white py-8 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div> */}

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-post-md font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-medium">{post.slice(0,120)}</span>
        </div>

        <button
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
          onClick={handleClick}
        >
                  
            {rate}
          

          {levelUp && (
            <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.09103 5.82987L5 10.6911L4.35716 10.0849L4.35716 2.47737L9.09103 5.82987Z"
              fill=""
            />
          </svg>
        
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CardDataStats;
