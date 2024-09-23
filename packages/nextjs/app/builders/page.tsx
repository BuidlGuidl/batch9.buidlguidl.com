"use client";

// Work in Progress
import { useEffect, useState } from "react";
import { BuilderPicture, MentorPicture } from "./_components/index";
import type { NextPage } from "next";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { Builder, Mentor } from "~~/types/builders";

const getRandomGender = () => {
  return Math.random() < 0.5 ? "men" : "women";
};

const getRandomUserImage = () => {
  const randomInt = Math.floor(Math.random() * 50);
  const randomGender = getRandomGender();

  return `https://randomuser.me/api/portraits/${randomGender}/${randomInt}.jpg`;
};

const getBuilderFromEvent = (event: any): Builder => ({
  image: getRandomUserImage(),
  profileLink: "builders/" + event.args.builder,
  address: event.args.builder,
  checkedIn: true,
});

const mentors: Mentor[] = [
  {
    name: "Eda",
    image: "https://avatars.githubusercontent.com/u/22100698?v=4",
    profileLink: "https://github.com/edakturk14",
    checkedIn: false,
  },
  {
    name: "Derrek",
    image: "https://avatars.githubusercontent.com/u/80121818?v=4",
    profileLink: "https://github.com/derrekcoleman",

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
  const [buildersCheckedIn, setBuildersCheckedIn] = useState(0);
  const [builders, setBuilders] = useState<Builder[]>([]);

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

  useEffect(() => {
    if (!isLoadingEvents && events != undefined) {
      setBuildersCheckedIn(events.length);
      setBuilders(events.map(e => getBuilderFromEvent(e)));
    }
  }, [isLoadingEvents, events]);

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
                <MentorPicture person={mentor} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Builders 🏗</h2>
            <p className="text-sm font-bold text-center mb-8">Builders that checkedIn: {buildersCheckedIn}</p>
            <div className="grid grid-cols-5 gap-20">
              {[...new Map(builders.map(builder => [builder.address, builder])).values()].map((builder, i) => (
                <BuilderPicture person={builder} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Builders;
