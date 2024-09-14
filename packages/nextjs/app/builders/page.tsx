"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const getRandomGender = () => {
  return Math.random() < 0.5 ? "men" : "women";
};

const getRandomUserImage = () => {
  const randomInt = Math.floor(Math.random() * 50);
  const randomGender = getRandomGender();

  return `https://randomuser.me/api/portraits/${randomGender}/${randomInt}.jpg`;
};

const mentors = [
  { name: "Eda", imgUrl: "https://avatars.githubusercontent.com/u/22100698?v=4", link: "/builders/0x000000" },
  { name: "Derrek", imgUrl: "https://avatars.githubusercontent.com/u/80121818?v=4", link: "/builders/0x000000" },
  { name: "Philip", imgUrl: "https://avatars.githubusercontent.com/u/90064316?v=4", link: "/builders/0x000000" },
];

type Builder = {
  image: string;
  link: string;
  checkedIn: boolean;
};

const getBuilderFromEvent = (event: any): Builder => {
  const args = event.args;

  const person: Builder = {
    image: getRandomUserImage(),
    link: "builders/" + args.builder,
    checkedIn: true,
  };

  return person;
};

const Builders: NextPage = () => {
  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 31231n,
    watch: true,
    filters: { first: true } as any,
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  let buildersCheckedIn = 0;
  let builders: Builder[] = [];

  if (events != undefined) {
    buildersCheckedIn = events.length;
    builders = events.map(e => getBuilderFromEvent(e));
  }

  return (
    <>
      <div className="text-center bg-secondary p-10">
        <h1 className="text-4xl my-0">Batch #9 people 💻 </h1>
      </div>

      <div className="max-w-screen-lg mx-auto mt-10 p-6 bg-base-300 shadow-md rounded-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6">Mentors</h2>
            <div className="grid grid-cols-3 gap-6">
              {mentors.map((mentor, i) => (
                <div key={i} className="text-center">
                  <Image
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full mx-auto"
                    src={mentor.imgUrl}
                    alt={mentor.name}
                  />
                  <a
                    href={mentor.link}
                    className="mt-2 block text-blue-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mentor.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Builders 🏗</h2>
            <p className="text-sm font-bold text-center mb-8">Builders that checkedIn: {buildersCheckedIn}</p>
            <div className="grid grid-cols-5 gap-20">
              {builders.map((builder, i) => (
                <div key={i} className="text-center">
                  <a
                    href={builder.link}
                    className="mt-2 block text-blue-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-full mx-auto"
                      src={builder.image}
                      alt={builder.link}
                    />
                    See profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Builders;
