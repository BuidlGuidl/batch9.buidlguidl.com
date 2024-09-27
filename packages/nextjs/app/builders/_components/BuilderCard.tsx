import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { normalize } from "path";
import { getAddress, isAddress } from "viem";
import { useEnsAvatar, useEnsName } from "wagmi";
import Arrow_Icon from "~~/components/Arrow_Icon";
import { Address, BlockieAvatar } from "~~/components/scaffold-eth";
import { Builder, Mentor } from "~~/types/builders";

type Props = {
  mentor?: Mentor;
  builder?: Builder;
};

const banners = [
  "/banner_1.jpg",
  "/banner_2.jpg",
  "/banner_3.jpg",
  "/banner_4.jpg",
  "/banner_5.jpg",
  "/banner_6.jpg",
  "/banner_7.jpg",
];

const getRandomBanner = () => {
  const randomIndex = Math.floor(Math.random() * banners.length);
  return banners[randomIndex];
};

const BuilderCard = ({ mentor, builder }: Props) => {
  const [ensAvatar, setEnsAvatar] = useState<string | null>();
  const checkSumAddress = builder?.address ? getAddress(builder.address) : undefined;
  const [banner, setBanner] = useState<string>("");

  useEffect(() => {
    setBanner(getRandomBanner());
  }, []);

  const { data: fetchedEns } = useEnsName({
    address: checkSumAddress,
    chainId: 1,
    query: {
      enabled: isAddress(checkSumAddress ?? ""),
    },
  });

  const { data: fetchedEnsAvatar } = useEnsAvatar({
    name: fetchedEns ? normalize(fetchedEns) : undefined,
    chainId: 1,
    query: {
      enabled: Boolean(fetchedEns),
      gcTime: 30_000,
    },
  });

  useEffect(() => {
    console.log(fetchedEnsAvatar);
    setEnsAvatar(fetchedEnsAvatar);
  }, [fetchedEnsAvatar]);

  return (
    <div className="z-10 border rounded-xl h-[15rem] min-w-[17rem] w-full font-light dark:border-zinc-700 border-zinc-400 flex flex-col text-text-zinc-700 dark:text-zinc-300 shadow-md">
      <div className="w-full relative flex flex-col flex-grow-[20] rounded-t-xl">
        {banner ? (
          <Image
            src={banner}
            alt="banner"
            priority={true}
            width={1000}
            height={1000}
            className="rounded-t-xl object-cover max-h-24"
          />
        ) : (
          <div className="bg-gradient-to-r from-st_cyan/10 to-st_purple/10 rounded-t-xl h-24 w-full" />
        )}

        <div className="rounded-full z-10 top-10 left-5 absolute dark:border-zinc-700 scale-90 sm:scale-100 border-zinc-400 border-4">
          {mentor && <Image src={mentor.image} alt="builder" width={110} height={110} className="rounded-full" />}

          {builder && <BlockieAvatar address={builder.address as `0x${string}`} ensImage={ensAvatar} size={100} />}
        </div>

        <div className="text-end">
          <div
            className="bg-clip-text text-transparent 
                    dark:bg-[linear-gradient(to_right,theme(colors.indigo.500),theme(colors.indigo.200),theme(colors.rose.500),theme(colors.fuchsia.500),theme(colors.sky.500),theme(colors.indigo.200),theme(colors.indigo.500))] 
                    bg-[linear-gradient(to_right,theme(colors.indigo.500),theme(colors.indigo.800),theme(colors.sky.500),theme(colors.fuchsia.500),theme(colors.sky.500),theme(colors.indigo.800),theme(colors.indigo.500))] bg-[length:200%_auto] animate-gradient font-bold text-2xl"
          >
            {mentor && <p className="pr-4 sm:pr-8 uppercase">{mentor.name}</p>}

            {builder ? (
              <div className="w-full flex justify-end pt-14 sm:pt-12 pr-4">
                <Address address={builder.address} size="sm" />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <hr className="border-t dark:border-zinc-700 border-zinc-400" />

      <div className="hover:bg-st_cyan/10 rounded-b-xl duration-75 transition-all dark:border-zinc-700 border-zinc-400 flex-grow">
        <Link
          href={mentor ? mentor.profileLink : builder ? builder.profileLink : ""}
          target="_blank"
          className="flex items-center justify-between h-full px-4"
        >
          <p className="font-medium flex flex-col items-center justify-center">View Profile</p>

          <Arrow_Icon />
        </Link>
      </div>
    </div>
  );
};

export default BuilderCard;
