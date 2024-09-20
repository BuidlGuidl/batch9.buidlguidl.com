import { Inconsolata } from "next/font/google";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = getMetadata({
  title: "dantesito.eth ",
  description: "Onchain freak 🇦🇷",
});

const socials = [
  {
    name: "X",
    url: "https://x.com/d4rm_",
  },
  {
    name: "Warpcast",
    url: "https://warpcast.com/d4rm",
  },
  {
    name: "GitHub",
    url: "https://github.com/d4rm5",
  },
  {
    name: "Telegram",
    url: "https://t.me/d4rm5",
  },
  {
    name: "My blog",
    url: "https://paragraph.xyz/@d4rm_",
  },
];

const projects = [
  {
    name: "Proof of X",
    url: "https://pox.me",
    description:
      "Open source web3 protocol focused on internet identity and privacy. I contributed to developing the web3 software and maintaining the community. Worked with Next.js, Tailwind, and front-end smart contracts integrations.",
  },
  {
    name: "Library digital credential",
    url: "https://x.com/d4rm_/status/1722034025190023404",
    description:
      "Open source digital credential software created for my school’s library, built with Expo, React Native, Go, and MySQL. It was my final project for high school.",
  },
  {
    name: "El Burro Podcast",
    url: "https://youtube.com/@realburropodcast",
    description: "Podcast that I co-created, hosted, and co-produced in 2023.",
  },
  {
    name: "Technical high school catalog",
    url: "https://github.com/catalogo-inet/catalogo-inet-front",
    description:
      "A map and catalog of all the technical secondary schools in Argentina, which won a contest organized by the INET (National Institute of Technological Education), where many schools from the country participated.",
  },
];

const DantesitoPage: NextPage = () => {
  return (
    <div
      className={`${inconsolata.className} flex items-center justify-center min-h-screen dark:bg-gray-900 bg-gray-100 p-5`}
    >
      <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-5">Hi, Dantesito here! 👋🏻</h1>{" "}
        <p className="text-lg mb-4">
          I&#39;m Dante, aka dantesito or d4rm. 🤠 <br />
          I&#39;m a systems engineering student from Argentina and a freak about blockchain, Ethereum, cryptography, and
          computers in general. 🧑‍💻
        </p>
        <p className="text-lg mb-8">
          Currently, I&#39;m learning about smart contracts, cryptography, cybersecurity, and related topics. In the
          past, I learned web and mobile development with a focus on front-end technologies like TypeScript, React,
          React Native, and Next.js. 🪷
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Find me on:</h2>
        <div className="text-center flex justify-center align-center mb-1">
          <Address address="0x021584e57b2219957784951639385027607266e6" />
        </div>
        <ul className="flex justify-center space-x-4 text-lg text-blue-600 dark:text-blue-400">
          {socials.map(social => (
            <li key={social.name}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {social.name}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Past projects / contributions ↓</h2>
        <ul className="list-none text-left space-y-4">
          {projects.map(project => (
            <li key={project.name}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {project.name}
              </a>
              : {project.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DantesitoPage;
