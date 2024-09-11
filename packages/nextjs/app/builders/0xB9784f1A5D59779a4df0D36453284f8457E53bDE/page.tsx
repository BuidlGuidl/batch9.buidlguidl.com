import Image from "next/image";
import airo from "./assets/uncle-airo.jpg";
import { NextPage } from "next";
import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Address } from "~~/components/scaffold-eth";

const Page: NextPage = () => {
  return (
    <>
      <div className="w-full rounded-lg overflow-hidden max-w-6xl mx-auto shadow-2xl flex flex-col my-10 animate-gradient-x">
        <div className="w-full  bg-gradient-to-r from-warning to-error dark:from-warning dark:to-error">
          <div className="flex justify-center items-center h-full">
            <div className="w-80 h-80 overflow-hidden rounded-full shadow-lg">
              <Image src={airo} alt="Cleaner Avatar" className="object-cover w-full h-full" width={500} height={500} />
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-secondary to-base-100 dark:from-secondary dark:to-base-300 flex flex-col justify-center p-8">
          <div className="flex flex-col  items-center text-center">
            <h1 className="text-5xl font-semibold">
              <span className="bg-clip-text text-black dark:text-white">Vlad</span>
              <span className="space-y-1 text-center flex justify-center">
                <Address address="0xB9784f1A5D59779a4df0D36453284f8457E53bDE" />
              </span>
            </h1>

            <div className="flex gap-3">
              <a href="https://github.com/vzaporozky" target="_blank" rel="noopener noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-8 w-8 fill-black dark:fill-white  hover:scale-125 transition-transform duration-300"
                >
                  <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                </svg>
              </a>
              <a
                href="https://app.buidlguidl.com/builders/0xB9784f1A5D59779a4df0D36453284f8457E53bDE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BuidlGuidlLogo className="h-8 w-8 hover:scale-125 transition-transform duration-300" />
              </a>
              <a href="https://t.me/vzaporozky" target="_blank" rel="noopener noreferrer">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-black-500 dark:text-white-400 hover:scale-125 transition-transform duration-300" />
              </a>
              <a href="mailto:zaporozhskiy111@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-8 w-8 fill-black dark:fill-white  hover:scale-125 transition-transform duration-300"
                >
                  <title>Email</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-4">
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <RocketLaunchIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 hover:scale-125 transition-transform duration-300" />
              <span>Blockchain Enthusiast + Web3 Explorer</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <CodeBracketIcon className="h-8 w-8 text-green-500 dark:text-green-400 hover:scale-125 transition-transform duration-300" />
              <span>Front-end + Smart Contract Developer</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <LightBulbIcon className="h-8 w-8 text-yellow-500 dark:text-yellow-400 hover:scale-125 transition-transform duration-300" />
              <span>Innovative Thinker</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <GlobeAltIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 hover:scale-125 transition-transform duration-300" />
              <span>Crypto Enthusiast</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <ServerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 hover:scale-125 transition-transform duration-300" />
              <span>System Design Enthusiast</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
