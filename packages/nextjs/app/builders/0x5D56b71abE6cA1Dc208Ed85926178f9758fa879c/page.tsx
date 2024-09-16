import { BackgroundLines } from "./_components/bg-lines";
import { FloatingDock } from "./_components/floating_bar";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandX,
  IconHome,
  IconTower,
} from "@tabler/icons-react";
import { Address } from "~~/components/scaffold-eth";

const links = [
  {
    title: "Website",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://styles-portfolio.vercel.app/",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/ishtails",
  },
  {
    title: "BuidlGuidl",
    icon: <IconTower className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://app.buidlguidl.com/builders/0x5D56b71abE6cA1Dc208Ed85926178f9758fa879c",
  },
  {
    title: "Telegram",
    icon: <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://t.me/ishtails",
  },
  {
    title: "X",
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://x.com/ishtails",
  },
  {
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.instagram.com/ishtails",
  },
];

const NextPage = () => {
  return (
    <div>
      <div className="dark:bg-zinc-900 bg-zinc-100 text-zinc-100">
        <BackgroundLines className="flex items-center min-h-screen justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-zinc-900 to-zinc-700 dark:from-zinc-600 dark:to-white text-[5rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-sans py-2 md:py-10 relative z-20 tracking-widest">
            STYLES.
          </h2>

          <p className="mx-auto text-sm italic md:text-lg text-zinc-600 dark:text-zinc-300 text-center">
            full stack developer, designer & achitect, web3 enthusiast, musician, and possibly a human.
          </p>

          <FloatingDock items={links} />

          <div className="text-zinc-800 my-6 dark:text-zinc-100">
            <Address address="0x5D56b71abE6cA1Dc208Ed85926178f9758fa879c" />
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
};

export default NextPage;
