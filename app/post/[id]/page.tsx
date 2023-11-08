import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useRouter
  console.log(router.query);
  return (
    <div>
        {router.query}
    </div>
  )
}

export default page
