import Link from "next/link";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Fedev",
  description: "A software developer from Argentina 🇦🇷",
});

const FedevPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Hi! I&#39;m Fedev 👋</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">A software developer from Argentina 🇦🇷.</p>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <p className="text-xl mb-6 text-gray-800 dark:text-gray-300">
          I graduated as a systems analyst and for the past 3 years, I&#39;ve been exploring, learning, and actively
          contributing to the Web3 space. I&#39;m passionate about traveling the world, meeting builders, joining
          hackathons, and enjoying barbecues with friends.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Hackathon Journey</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I have participated in 3 IRL hackathons with EthGlobal and over 5 virtual ones, becoming a finalist in two
            of them 🥳.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Connect with me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Follow me on{" "}
            <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/fedev_" passHref>
              <span className="text-blue-600 dark:text-blue-400 hover:underline">X (Twitter)</span>
            </Link>{" "}
            to stay updated on what I&#39;m working on!
          </p>
        </div>
      </section>
    </div>
  );
};

export default FedevPage;
