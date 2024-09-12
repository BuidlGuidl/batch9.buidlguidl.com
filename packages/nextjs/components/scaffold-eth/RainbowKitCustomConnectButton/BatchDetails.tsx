import { Address } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type BatchProps = {
  address: Address;
};

const zeroAddress = "0x0000000000000000000000000000000000000000";

export const BatchDetails = ({ address }: BatchProps) => {
  const { data: allowListed, isLoading: allowListLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: checkedIn, isLoading: checkedInLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  return (
    <>
      {!allowListLoading && !checkedInLoading && (
        <div>
          <span className="text-xs">{allowListed ? <p>✅ Allow Listed</p> : <p>❌ Not Allow Listed</p>}</span>
          <span className="text-xs">{checkedIn != zeroAddress ? <p>✅ Checked in</p> : <p>❌ Not checked in</p>}</span>
        </div>
      )}
    </>
  );
};
