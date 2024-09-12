import { GithubIcon } from "./_components/GithubIcon";
import { WalletIcon } from "./_components/WalletIcon";
import { XIcon } from "./_components/XIcon";
import type { NextPage } from "next";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Danitome24 builder page",
  description: "Builder page for danitome24 with a little bio and social links.",
});

const Builder: NextPage = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full mx-auto mb-4">
          <BlockieAvatar address="0xaa4C60b784E2b3E485035399bF1b1aBDeD66A60f" size={120} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">danitome24</h1>
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-700">My name is Daniel.</p>
        <p className="text-gray-700">I&apos;m a backend developer and for the past 7 years.</p>
        <p className="text-gray-700">
          I&apos;ve been working with Php as main language. discovered web3 development through experimenting with
          crypto. Recently, I completed some tutorials: the first one on Udemy, then Cyfin Updraft, where I heard about
          SpeedrunEthereum.
        </p>
        <p className="text-gray-700">You can reach me at: </p>
      </div>

      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://github.com/danitome24" target="_blank" className="text-gray-800 hover:text-gray-600">
          <GithubIcon />
        </a>

        <a href="https://x.com/danitome24" target="_blank" className="text-blue-400 hover:text-blue-600">
          <XIcon />
        </a>

        <a
          href="/builders/0xaa4C60b784E2b3E485035399bF1b1aBDeD66A60f"
          target="_blank"
          className="text-gray-500 hover:text-gray-900"
        >
          <WalletIcon />
        </a>
      </div>
    </div>
  );
};

export default Builder;
