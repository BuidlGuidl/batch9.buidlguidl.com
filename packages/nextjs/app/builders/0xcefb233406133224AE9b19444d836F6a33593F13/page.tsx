import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const ProfilePage: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4 w-4/5">
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <header className="my-5">
              <h1 className="font-bold text-4xl">Hi everyone, I&#39;m Guido!</h1>
              <Address address={"0xcefb233406133224AE9b19444d836F6a33593F13"} />
            </header>
            <div className="flex gap-1 items-center"></div>
          </div>

          <div className="space-y-4">
            <section>
              <h2 className="font-bold text-xl mb-2">About Me</h2>
              <p>
                I&#39;m a software engineer with a passion for blockchain technology. I&#39;ve been working on many
                centralized finance projects, and now I&#39;m trying to dive deep into purely blockchain-based projects.
              </p>
            </section>

            <section className="pt-4">
              <h2 className="font-bold text-xl mb-2">Contact</h2>
              <div className="flex justify-around items-center">
                <a
                  href="https://www.linkedin.com/in/guidopeirano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/guidoPeirano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
                <a
                  href="https://t.me/guidoPeirano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Telegram
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
