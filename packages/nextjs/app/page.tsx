"use client";

import Image from "next/image";
import Link from "next/link";
import { ShootingStars } from "./builders/0x5D56b71abE6cA1Dc208Ed85926178f9758fa879c/_components/shooting-stars";
import { StarsBackground } from "./builders/0x5D56b71abE6cA1Dc208Ed85926178f9758fa879c/_components/stars-background";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Card from "~~/components/Card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import useBuilderExist from "~~/hooks/user/useBuilderExist";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const builderPageExists = useBuilderExist({ address: connectedAddress });

  console.log({
    builderPageExists,
  });

  const { data: isAllowed } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [connectedAddress],
  });

  const { data: IsCheckIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [connectedAddress],
  });

  const { data: checkedInCounter, error } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  if (error) {
    console.log("Error fetching checkedInCounter", error);
  }

  return (
    <div className="dark:bg-zinc-950 bg-zinc-200 dark:text-st_white text-st_background min-h-screen h-fit relative overflow-clip flex items-center justify-center">
      <div className="absolute w-full h-full pointer-events-none">
        <Image
          src="/blur_yellow.svg"
          alt="Blurred Yellow Background"
          className="absolute -top-[10%] -left-[40%] w-200 h-200 opacity-50 blur-xl"
          width={2000}
          height={2000}
        />
      </div>

      <div className="absolute w-full h-full pointer-events-none">
        <Image
          src="/blur_blue.svg"
          alt="Blurred Blue Background"
          className="absolute -bottom-[10%] -right-[40%] opacity-50 blur-xl"
          width={2000}
          height={2000}
        />
      </div>

      <div className="max-w-7xl px-4 mt-8 sm:mt-0 sm:px-0 mx-auto flex flex-col items-center justify-center relative">
        <ShootingStars />
        <StarsBackground />

        {/* Punks BG */}
        <div className="overflow-clip z-10">
          <Image src="/cryptopunks.png" alt="punks" width={2000} height={2000} />
        </div>

        {/* Header / SubHeader */}
        <div className="z-10 mt-10 sm:mt-16 tracking-wider flex flex-col items-center justify-center">
          <h1 className="font-semibold text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to Batch 9 of
            <span className="ml-3 font-bold">
              <span className="text-st_cyan">Buidl</span>
              <span className="text-st_yellow">Guidl</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-center lg:text-2xl xl:text-3xl">
            Get started by taking a look at your batch GitHub repository.
          </p>
        </div>

        <div className="flex z-10 justify-center items-center">
          {checkedInCounter === undefined && !error ? (
            <div className="w-64 h-8 bg-st_gray/20 animate-pulse rounded-lg"></div>
          ) : checkedInCounter ? (
            <p className="flex border border-zinc-500 py-4 px-8 rounded-full font-semibold gap-2 justify-center">
              <span className="font-medium">Checked-in count:</span>
              <span>{checkedInCounter.toString()}</span>
            </p>
          ) : null}
        </div>

        {/* Member Status */}
        {builderPageExists ? (
          <Link
            href={`/builders/${connectedAddress}`}
            target="_blank"
            title="View Your Builder Page"
            className="z-10 w-[16rem] sm:w-[34rem] text-center tracking-widest py-5 mt-6 text-st_cyan font-semibold rounded-xl border border-zinc-500 uppercase shadow-sm hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all"
          >
            Batch Member {isAllowed ? "✅" : "❌"}
          </Link>
        ) : (
          <div
            title="No Builder Page Found"
            className="z-10 w-[16rem] sm:w-[34rem] text-center tracking-widest py-5 mt-6 text-st_cyan font-semibold rounded-xl border border-zinc-500 uppercase shadow-sm transition-all"
          >
            Batch Member {isAllowed ? "✅" : "❌"}
          </div>
        )}

        {isAllowed && IsCheckIn !== zeroAddress ? (
          <div className="text-center z-10 italic text-zinc-500">
            <p>Cheers 🍻.. You are checked in!</p>
          </div>
        ) : (
          isAllowed && (
            <div className="text-center z-10 italic text-zinc-400">
              <p>
                <span>
                  Hey there! Ready for an adventure?{" "}
                  <Link
                    target="_blank"
                    href="https://github.com/BuidlGuidl/batch9.buidlguidl.com/issues/10"
                    className="underline underline-offset-1 hover:underline-offset-2 transition-all text-st_cyan/70 z-10"
                  >
                    Check-In
                  </Link>
                </span>{" "}
                to get started! 🚀
              </p>
            </div>
          )
        )}

        {/* Cards */}
        <div className="flex z-10 flex-col sm:flex-row sm:gap-8 mb-8">
          {/* Debug Contract Card */}
          <Card
            mainText="Tinker with your smart contract using the Debug Contracts tab."
            footerLink="/debug"
            footerText="Try it out.."
          />

          {/* Block Explorer Card */}
          <Card
            mainText="Explore your local transactions with the Block Explorer tab."
            footerLink="/blockexplorer"
            footerText="Try it out.."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
