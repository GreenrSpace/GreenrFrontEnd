import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";


export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>TreeWind</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Ready to 
            <a className="text-blue-600" href="https://ubiklabs.tech">
              Join the leafs in the wind
            </a>
          </h1>
  
          <p className="mt-3 text-2xl">
            Join our waiting list!
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
  Signup now       </code>
          </p>
  
         
        </main>
  
        <footer className="flex items-center justify-center w-full h-24 border-t">
      <Link href="/signup">
        <a
          className="flex items-center justify-center"
          
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <div  className="h-4 ml-2" >TreeWind </div>
        </a>
        </Link>
      </footer>
      </div>
    )
  }
  