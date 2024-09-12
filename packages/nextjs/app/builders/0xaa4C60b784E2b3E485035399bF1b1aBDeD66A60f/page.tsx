import { WalletIcon } from "./_components/WalletIcon";
import type { NextPage } from "next";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
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
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.051c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.419-1.304.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.521.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.019.004 2.045.137 3.004.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.655.242 2.873.119 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.218.694.825.576 4.765-1.589 8.2-6.085 8.2-11.385 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a href="https://x.com/danitome24" target="_blank" className="text-blue-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.044.762.128 1.124-4.088-.205-7.719-2.164-10.148-5.144-.423.729-.666 1.575-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.617v.062c0 2.385 1.696 4.374 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.6 3.418-1.684 1.32-3.809 2.107-6.115 2.107-.397 0-.788-.023-1.174-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.015-.637.961-.694 1.797-1.562 2.457-2.549z" />
          </svg>
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

export default Debug;
