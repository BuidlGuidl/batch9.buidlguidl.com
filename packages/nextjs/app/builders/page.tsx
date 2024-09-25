"use client";

// Work in Progress
import { useEffect, useState } from "react";
import Image from "next/image";
import { ShootingStars } from "./0x5D56b71abE6cA1Dc208Ed85926178f9758fa879c/_components/shooting-stars";
import { StarsBackground } from "./0x5D56b71abE6cA1Dc208Ed85926178f9758fa879c/_components/stars-background";
import BuilderCard from "./_components/BuilderCard";
import type { NextPage } from "next";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { Builder, Mentor } from "~~/types/builders";

const getBuilderFromEvent = (event: any): Builder => ({
  profileLink: "builders/" + event.args.builder,
  address: event.args.builder,
  checkedIn: true,
});

const mentors: Mentor[] = [
  {
    name: "Derrek",
    image: "https://avatars.githubusercontent.com/u/80121818?v=4",
    profileLink: "https://github.com/derrekcoleman",
    checkedIn: false,
  },
  {
    name: "Eda",
    image: "https://avatars.githubusercontent.com/u/22100698?v=4",
    profileLink: "https://github.com/edakturk14",
    checkedIn: false,
  },
  {
    name: "Philip",
    image: "https://avatars.githubusercontent.com/u/90064316?v=4",
    profileLink: "https://github.com/phipsae",
    checkedIn: false,
  },
];

const Builders: NextPage = () => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: events, isLoading: isLoadingEvents } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 31231n,
    watch: true,
    filters: { first: true } as any,
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  useEffect(() => {
    if (!isLoadingEvents && events != undefined) {
      setBuilders(events.map(e => getBuilderFromEvent(e)));
      setIsLoading(false);
    }
  }, [isLoadingEvents, events]);

  return (
    <div className="dark:bg-zinc-950 bg-zinc-200 dark:text-st_white text-st_background min-h-screen h-fit relative overflow-clip flex justify-center">
      <ShootingStars />
      <StarsBackground />

      <div className="absolute w-full h-full pointer-events-none">
        <Image
          src="/blur_yellow.svg"
          alt="Blurred Yellow Background"
          className="absolute -top-[10%] -left-[40%] w-200 h-200 blur-2xl"
          width={2000}
          height={2000}
        />
      </div>

      <div className="absolute w-full h-full pointer-events-none">
        <Image
          src="/blur_blue.svg"
          alt="Blurred Blue Background"
          className="absolute -bottom-[10%] -right-[40%] blur-2xl"
          width={2000}
          height={2000}
        />
      </div>

      <div className="flex flex-col gap-12 max-w-7xl justify-between w-full mt-10 sm:mt-18 z-10">
        {/* Mentor Section */}
        <div className="flex flex-col px-10 gap-4 w-full ">
          {/* Mentor Header */}
          <div className="flex gap-2 sm:gap-5 items-center justify-between">
            <div className="tracking-wider flex flex-col items-start">
              <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">Our Mentors..</h1>
              <p className="text-sm md:text-base -mt-1 text-zinc-500">Meet our batch mentors..</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="flex border dark:border-zinc-700 border-zinc-400 py-3 px-10 rounded-xl font-semibold gap-2 justify-center text-cyan-500">
                <span className="font-medium flex-shrink-0">Counter: {mentors.length}</span>
              </p>
            </div>
          </div>

          {/* Mentor Cards */}
          <div className="grid grid-flow-row sm:grid-flow-col gap-10 lg:flex-row justify-evenly w-full border dark:border-zinc-700 border-zinc-400 rounded-xl pt-10 pb-6 px-8 sm:overflow-x-scroll scrollbar-primary">
            {mentors.map((mentor, i) => (
              <BuilderCard mentor={mentor} key={i} />
            ))}
          </div>
        </div>

        {/* Builder Section */}
        <div className="flex flex-col px-10 gap-4 w-full mb-10 z-10">
          {/* Builder Header */}
          <div className="flex gap-2 sm:gap-5 items-center justify-between">
            <div className="tracking-wider flex flex-col items-start">
              <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">Our Builders..</h1>
              <p className="text-sm md:text-base -mt-1 text-zinc-500">Meet our batch builders..</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="flex border dark:border-zinc-700 border-zinc-400 py-3 px-10 rounded-xl font-semibold gap-2 justify-center text-cyan-500">
                <span className="font-medium flex-shrink-0">
                  Counter: {checkedInCounter ? `${checkedInCounter}` : 0}
                </span>
              </p>
            </div>
          </div>

          {/* Builder Cards */}
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-r-2 border-t-2 border-b-2 border-zinc-500"></div>
            </div>
          ) : (
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 gap-10 lg:flex-row justify-evenly w-full border dark:border-zinc-700 border-zinc-400 rounded-xl pt-10 pb-6 px-8 sm:overflow-x-scroll scrollbar-primary">
              {[...new Map(builders.map(builder => [builder.address, builder])).values()].map((builder, i) => (
                <BuilderCard builder={builder} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Builders;
