"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "../CardDataStats";

const ECommerce: React.FC = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items to display per page
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(newPage) {
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (response.ok) {
        const data = await response.json();
        const paginatedData = data.posts.slice(startIndex, endIndex);
        setData(data.posts);
        setAllPosts(paginatedData);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    }
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(newPage);
      fetchData(newPage); // Fetch data for the new page
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {allPosts.map((post) => (
          <CardDataStats
            key={post.id} 
            title={post.title}
            post={post.body}
            rate="read"
            levelUp
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-blue-500 font-semibold py-2 px-4 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
          className={`bg-blue-500 font-semibold py-2 px-4 rounded ${
            currentPage >= Math.ceil(data.length / itemsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
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
