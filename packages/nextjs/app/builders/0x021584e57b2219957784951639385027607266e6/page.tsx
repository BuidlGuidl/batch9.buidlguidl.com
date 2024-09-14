import { Inconsolata } from "next/font/google";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = getMetadata({
  title: "dantesito.eth ",
  description: "Onchain freak 🇦🇷",
});

const DantesitoPage: NextPage = () => {
  return (
    <div
      className={`${inconsolata.className} flex items-center justify-center min-h-screen dark:bg-gray-900 bg-gray-100 p-5`}
    >
      <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-5">Hi, Dantesito here! 👋🏻</h1>
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

        <h2 className="text-2xl font-semibold mb-4">Past projects / contributions ↓</h2>
        <ul className="list-none text-left space-y-4">
          <li>
            <a
              href="https://pox.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Proof of X
            </a>
            : Open source web3 protocol focused on internet identity and privacy. I contributed to developing the web3
            software and maintaining the community. Worked with Next.js, Tailwind, and front-end smart contracts
            integrations.
          </li>
          <li>
            <a
              href="https://x.com/d4rm_/status/1722034025190023404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Library digital credential
            </a>
            : Open source digital credential software created for my school’s library, built with Expo, React Native,
            Go, and MySQL. It was my final project for high school.
          </li>
          <li>
            <a
              href="https://youtube.com/@realburropodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              El Burro Podcast
            </a>
            : Podcast that I co-created, hosted, and co-produced in 2023.
          </li>
          <li>
            <a
              href="https://github.com/catalogo-inet/catalogo-inet-front"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Technical high school catalog
            </a>
            : A map and catalog of all the technical secondary schools in Argentina, which won a contest organized by
            the INET (National Institute of Technological Education), where many schools from the country participated.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DantesitoPage;
