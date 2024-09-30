"use client";

import { useEffect, useState } from "react";

const useBuilderExist = ({ address }: { address: string | undefined }) => {
  const [builderPageExists, setBuilderPageExists] = useState<boolean>(false);

  useEffect(() => {
    const verifyBuilderPage = async (address: string) => {
      try {
        const response = await fetch(`/builders/${address}`);
        setBuilderPageExists(response.status === 200);
      } catch (error) {
        setBuilderPageExists(false);
      }
    };

    if (address) {
      verifyBuilderPage(address);
    } else {
      setBuilderPageExists(false);
    }
  }, [address]);

  return builderPageExists;
};

export default useBuilderExist;
