
"use client"
import Link from "next/link";
import { PostView } from "@/components/Modal/PostView";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ECommerce from "@/components/Dashboard/E-commerce";
type Props = {
  params: Record<string, string> | null | undefined;
};

export default function Page({params}: Props) {
    const searchParams = useSearchParams();
    const sKey =searchParams.get("sKey");
    const showModal = searchParams.get("modal");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch(`https://dummyjson.com/posts/${sKey}`);
        const resp = await response.json();
        
        console.log(resp)
        setData(resp);
      };
      fetchPosts();
    }, [sKey]);
  return (
    <>
      {showModal && <PostView title={data.title} body={data.body}/>}
      <ECommerce/>
    </>
  );
}