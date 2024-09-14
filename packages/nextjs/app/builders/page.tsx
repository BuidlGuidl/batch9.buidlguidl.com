import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Builders",
  description: "List of members of the batch #9",
});

const getRandomGender = () => {
  return Math.random() < 0.5 ? "men" : "women";
};

const getRandomUserImage = () => {
  const randomInt = Math.floor(Math.random() * 50);
  const randomGender = getRandomGender();

  return `https://randomuser.me/api/portraits/${randomGender}/${randomInt}.jpg`;
};

const mentors = [
  { name: "Mentor 1", imgUrl: getRandomUserImage(), link: "/builders/0x000000" },
  { name: "Mentor 2", imgUrl: getRandomUserImage(), link: "/builders/0x000000" },
  { name: "Mentor 3", imgUrl: getRandomUserImage(), link: "/builders/0x000000" },
];

const builders = [
  { name: "Builder 1", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: true },
  { name: "Builder 2", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: false },
  { name: "Builder 3", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: true },
  { name: "Builder 1", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: true },
  { name: "Builder 2", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: false },
  { name: "Builder 3", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: true },
  { name: "Builder 1", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: true },
  { name: "Builder 2", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: false },
  { name: "Builder 3", imgUrl: getRandomUserImage(), link: "/builders/0x000000", checkIn: true },
];

const Builders: NextPage = () => {
  const totalBuilders = builders.length;
  const buildersCheckedIn = builders.filter(builder => builder.checkIn).length;

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
              {mentors.map(mentor => (
                <div key={mentor.name} className="text-center">
                  <img className="w-24 h-24 rounded-full mx-auto" src={mentor.imgUrl} alt={mentor.name} />
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
            <p className="text-sm font-bold text-center mb-8">
              Builders that checkedIn: {buildersCheckedIn} de {totalBuilders}
            </p>
            <div className="grid grid-cols-5 gap-20">
              {builders.map(builder => (
                <div key={builder.name} className="text-center">
                  <img className="w-24 h-24 rounded-full mx-auto" src={builder.imgUrl} alt={builder.name} />
                  <a
                    href={builder.link}
                    className="mt-2 block text-blue-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {builder.name}
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
