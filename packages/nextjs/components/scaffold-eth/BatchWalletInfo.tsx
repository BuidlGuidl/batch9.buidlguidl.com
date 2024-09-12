import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type Text = {
  title: string;
  message: string;
};

export const BatchWalletInfo = () => {
  const { address } = useAccount();

  const { data: isAllowed } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address?.toString()],
  });
  const { data: checkedIn } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address?.toString()],
  });

  if (address == undefined) {
    return;
  }

  const hasCheckedIn = "0x0000000000000000000000000000000000000000" != checkedIn;

  let textToShow: Text = { title: "", message: "" };
  if (isAllowed && hasCheckedIn) {
    textToShow = { title: "", message: "You are an up to date builder🥇 " };
  } else if (isAllowed && !hasCheckedIn) {
    textToShow = { title: "Hey builder 🏗️!", message: "Remember to checkIn :)" };
  } else if ((!isAllowed && !hasCheckedIn) || (!isAllowed && hasCheckedIn)) {
    textToShow = { title: "Oops!", message: "Reach us to be a builder" };
  }

  return (
    <div className="fixed top-16 right-4 bg-base-300  p-4 rounded shadow-lg">
      <p className="text-lg m-0">{textToShow.title}</p>
      <p className="text-sm m-0">{textToShow.message}</p>
    </div>
  );
};
