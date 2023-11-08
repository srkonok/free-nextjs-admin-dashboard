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
  title,
  post,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  // const router = useRouter();
  // const handleProfileClick = () => {
  //  return router.push("/post/{$title}");
  // };
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
          <span className="text-sm font-medium">{post}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
