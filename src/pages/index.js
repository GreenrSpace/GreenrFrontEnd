import Head from "next/head";
import Link from "next/link";
import Plant from "components/Plants";

import Layout from "components/Layout/Layout.js";

export default function Home() {
  let ExamplePlant = [
    {
      ImageLink: "/static/example_photos/albomonstera.JPG",
      Name: "Monstera Albo Variegated",
      Description: "Monstera Albo Variegated is a beautiful plant yeahhhhh",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/plant.jpeg",
      Name: "Brocolina",
      Description: "A beautiful collection of verigated plants",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/plant.jpeg",
      Name: "Brocolina",
      Description: "A beautiful collection of verigated plants",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/plant.jpeg",
      Name: "Brocolina",
      Description: "A beautiful collection of verigated plants",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/plant.jpeg",
      Name: "Brocolina",
      Description: "A beautiful collection of verigated plants",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/plant.jpeg",
      Name: "Sparriloina",
      Description: "A beautiful collection of verigated plants",
      ContactLink: "https://moodmap.app",
    },
  ];

  let ExampleUser = [{
    Name: "Tom",
        
  }]
  // useEffect(() => {

  // });

  // const {}
  return (
    <div>

    <Layout title = "Greenr Space">
      <div className="flex flex-col items-center justify-center  py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://ubiklabs.tech">
              Tom's Greenhouse
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Browse, Peruse, Enjoy and{" "}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              Reach Out at (Email){" "}
            </code>
          </p>
          </main>
          </div>
          <div className="grid grid-cols-3 gap-4 flex">
            {ExamplePlant.map((number) => (
              <Plant
              key={number}
                ImageLink={number.ImageLink}
                Name={number.Name}
                Description={number.Description}
                ContactLink={number.ContactLink}
              />
            ))}
          </div>
          
    </Layout>
    </div>

  );
}
