import { Address } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type BatchProps = {
  address: Address;
};

const TEXT_COMBINATIONS: Record<string, Text> = {
  CHECKED_IN: { title: "", message: "You are an up to date builder🥇" },
  NOT_CHECKED_IN: { title: "Hey builder 🏗️!", message: "Remember to check in :)" },
  NOT_ALLOWED: { title: "Oops!", message: "Reach us to be a builder" },
};

type Text = {
  title: string;
  message: string;
};

const zeroAddress = "0x0000000000000000000000000000000000000000";

export const BatchDetails = ({ address }: BatchProps) => {
  const { data: isAllowListed, isLoading: allowListLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: checkedIn, isLoading: checkedInLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const hasCheckedIn = zeroAddress !== checkedIn;

  const getTextToShow = (): Text => {
    switch (true) {
      case !isAllowListed:
        return TEXT_COMBINATIONS.NOT_ALLOWED;
      case hasCheckedIn:
        return TEXT_COMBINATIONS.CHECKED_IN;
      default:
        return TEXT_COMBINATIONS.NOT_CHECKED_IN;
    }
  };
  const textToShow = getTextToShow();

  if (allowListLoading || checkedInLoading) {
    return null;
  }

  return (
    <div className="bg-base-300  p-4 rounded shadow-lg">
      <p className="text-lg m-0">{textToShow.title}</p>
      <p className="text-sm m-0">{textToShow.message}</p>
    </div>
  );
};
