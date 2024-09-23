"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAddress, isAddress } from "viem";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { Address, BlockieAvatar } from "~~/components/scaffold-eth";
import { Builder } from "~~/types/builders";

type ProfilePictureProps = {
  person: Builder;
};

export const BuilderPicture = ({ person }: ProfilePictureProps) => {
  const [ensAvatar, setEnsAvatar] = useState<string | null>();
  const checkSumAddress = person.address ? getAddress(person.address) : undefined;

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
    setEnsAvatar(fetchedEnsAvatar);
  }, [fetchedEnsAvatar]);

  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center gap-2" rel="noopener noreferrer">
        <BlockieAvatar address={person.address as `0x${string}`} ensImage={ensAvatar} size={100} />

        <div>
          <Address address={person.address} size="xs" />
          <Link
            href={person.profileLink}
            className="underline underline-offset-2 hover:underline-offset-4 transition-all"
          >
            See Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
