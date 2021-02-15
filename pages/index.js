import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";



function Plant (props) {
  const {ImageLink, Name, Description, ContactLink} = props;

  return (
    <a
    href={ContactLink}
    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
  >
    <Image
      className="object-contain	"
    src={ImageLink}
      alt=""
      unsized
    />  
    <h3 className="text-2xl font-bold">{Name}</h3>
    <p className="mt-4 text-xl">
    {Description}
    </p>
  </a>
  )


}


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>TreeWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://ubiklabs.tech">
            Tom's Greenhouse
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Browse, Peruse, Enjoy and {' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
Reach Out at (Email)          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
         <Plant ImageLink = "/static/plant.jpeg"  Name = "Monstera" Description = "A beautiful collection of verigated plants" ContactLink = "https://moodmap.app"/>

         <Plant ImageLink = "/static/plant.jpeg"  Name = "Brocolina" Description = "A beautiful collection of verigated plants" ContactLink = "https://moodmap.app"/>
         <Plant ImageLink = "/static/plant.jpeg"  Name = "Sperilna" Description = "A beautiful collection of verigated plants" ContactLink = "https://moodmap.app"/>
         <Plant ImageLink = "/static/plant.jpeg"  Name = "Vegansaurace" Description = "A beautiful collection of verigated plants" ContactLink = "https://moodmap.app"/>

        </div>
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
