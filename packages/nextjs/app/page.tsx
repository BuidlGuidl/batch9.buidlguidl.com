"use client";

// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useAccount } from "wagmi";
import blur_yellow from "~~/assets/blue_yellow.svg";
import blur_blue from "~~/assets/blur_blue.svg";
import punks from "~~/assets/cryptopunks.png";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { theme } = useTheme();
  const { address: connectedAddress } = useAccount();
  const zeroAddress = "0x0000000000000000000000000000000000000000";

  const { data: isAllowed } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [connectedAddress],
  });

  const { data: IscheckedIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [connectedAddress],
  });

  return (
    <div className="dark:bg-zinc-950 bg-zinc-200 dark:text-st_white text-st_background min-h-screen h-fit relative overflow-clip flex items-center justify-center">
      <div className="absolute w-full h-full pointer-events-none">
        <Image
          src={blur_yellow}
          alt="Blurred Yellow Background"
          className="absolute -top-[10%] -left-[40%] w-200 h-200 blur-2xl"
        />
      </div>

      <div className="absolute w-full h-full pointer-events-none">
        <Image src={blur_blue} alt="Blurred Blue Background" className="absolute -bottom-[10%] -right-[40%] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Punks BG */}
        <div className="overflow-clip">
          <Image src={punks} alt="punks" />
        </div>

        {/* Header / SubHeader */}
        <div className="mt-10 sm:mt-16 tracking-wider flex flex-col items-center justify-center">
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

        {/* Member Status */}
        <div className="w-[16rem] sm:w-[34rem] text-center tracking-widest py-5 mt-6 text-st_cyan font-semibold rounded-xl border border-zinc-500 uppercase shadow-sm">
          Batch Member {isAllowed ? "✅" : "❌"}
        </div>

        {isAllowed && IscheckedIn !== zeroAddress && (
          <div className="text-center italic text-zinc-400">
            <p className="">Cheers 🍻.. You are checked in!</p>
          </div>
        )}

        {/* Cards */}
        <div className="flex flex-col sm:flex-row sm:gap-8">
          {/* Debug Contract Card */}
          <div className="shadow-sm border rounded-xl w-[16rem] h-[12rem] font-light mt-6 border-zinc-500 flex flex-col">
            <div className="w-full flex items-center justify-center flex-grow-[5]">
              <p className="px-4">
                Tinker with your smart contract using the{" "}
                <Link href="/debug" target="_blank" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>

            <div className="border-t border-zinc-500 flex-grow">
              <Link href="/debug" target="_blank" passHref className="flex items-center justify-between h-full px-4">
                <p className="font-medium flex flex-col items-center justify-center">Try it out..</p>

                <svg width="12" height="12" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 16.5V0.5H0V2.5H13L0 15.5L1 16.5L14 3.5V16.5H16ZM16 0.5H13V3.5H16V0.5Z"
                    fill={`
                    ${theme === "dark" ? "#868686" : "#000000"}
                  `}
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Debug Contract Card */}
          <div className="shadow-sm border rounded-xl w-[16rem] h-[12rem] font-light mt-6 border-zinc-500 flex flex-col">
            <div className="w-full flex items-center justify-center flex-grow-[5]">
              <p className="px-4">
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>

            <div className="border-t border-zinc-500 flex-grow">
              <Link
                href="/blockexplorer"
                target="_blank"
                passHref
                className="flex items-center justify-between h-full px-4"
              >
                <p className="font-medium flex flex-col items-center justify-center">Try it out..</p>

                <svg width="12" height="12" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 16.5V0.5H0V2.5H13L0 15.5L1 16.5L14 3.5V16.5H16ZM16 0.5H13V3.5H16V0.5Z"
                    fill={`
                    ${theme === "dark" ? "#868686" : "#000000"}
                  `}
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//   <>
//       <div className="flex items-center flex-col flex-grow pt-10">
//         <div className="px-5">
//           <h1 className="text-center">
//             <span className="block text-2xl mb-2">Welcome to</span>
//             <span className="block text-4xl font-bold">Batch 9</span>
//           </h1>
//           <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
//           <p className="text-lg flex gap-2 justify-center">
//             <span className="font-bold">Checked in builders count:</span>
//             <span>To Be Implemented</span>
//           </p>
//         </div>

//         <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
//           <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
//             <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
//               <BugAntIcon className="h-8 w-8 fill-secondary" />
//               <p>
//                 Tinker with your smart contract using the{" "}
//                 <Link href="/debug" passHref className="link">
//                   Debug Contracts
//                 </Link>{" "}
//                 tab.
//               </p>
//             </div>
//             <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
//               <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
//               <p>
//                 Explore your local transactions with the{" "}
//                 <Link href="/blockexplorer" passHref className="link">
//                   Block Explorer
//                 </Link>{" "}
//                 tab.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
