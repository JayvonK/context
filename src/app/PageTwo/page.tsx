'use client'

import { useAppContext } from '@/context/Context';
import { useRouter } from 'next/navigation'
import React from 'react'

const PageTwo = () => {

    const router = useRouter();

    const { pageTwoName } = useAppContext();

    const handlePageChange = () => {
        router.push('/')
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>PageTwo name: {pageTwoName}</h1>
      <button onClick={handlePageChange}>Change Page</button>
    </main>
  )
}

export default PageTwo
