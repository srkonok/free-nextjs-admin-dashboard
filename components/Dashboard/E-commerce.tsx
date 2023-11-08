"use client"
import React, { useEffect, useState } from "react";
import CardDataStats from "../CardDataStats";

const ECommerce: React.FC = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const currentPage=1;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data.posts.slice(0,9));
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred while fetching data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {data.map((posts) => (
          <CardDataStats
            key={posts.id} // Assuming the 'id' property exists in your data
            title={posts.title}
            post={posts.body}
            rate="read"
            levelUp
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          // onClick={() => handlePageChange(currentPage - 1)}
          // disabled={currentPage === 1}
          className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
        // className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded `}
          // onClick={() => handlePageChange(currentPage + 1)}
          // disabled={currentPage >= Math.ceil(allPosts.length / itemsPerPage)}
          //   currentPage >= Math.ceil(allPosts.length / itemsPerPage)
          //     ? "opacity-50 cursor-not-allowed"
          //     : "hover:bg-blue-700"
          // }`
        
        >
          Next
        </button>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* Add other components or elements here */}
      </div>
    </>
  );
};

export default ECommerce;
