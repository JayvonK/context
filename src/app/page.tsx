'use client'

import { useAppContext } from "@/context/Context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [name, setName] = useState<string>('Jeremy');

  // saving our context object into a variable called Data
  const data = useAppContext();

  useEffect(() => {

    // Accessing the property of setPageTwoName from our object
    data.setPageTwoName(name)
  })

  const router = useRouter();

  const handlePageChange = () => {
    router.push('/PageTwo');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{name}</h1>
      <button onClick={handlePageChange}>Change Page</button>
    </main>
  );
}
