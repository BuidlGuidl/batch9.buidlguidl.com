import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBuildingCastle } from "react-icons/tb";
import { Address, Balance } from "~~/components/scaffold-eth";

export const Bio = ({ address }: { address: string }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <Address address={address} format="long" />
          <Balance address={address} className="text" />
        </div>

        <div className="flex space-x-4">
          <a href="https://twitter.com/arjanjohan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter size={24} />
          </a>
          <a href="https://github.com/arjanjohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://t.me/arjanjohan" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://app.buidlguidl.com/builders/0xD0CA897A8A50502802Df62A712Da92FA26Be9bD5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BuidlGuidl"
          >
            <TbBuildingCastle size={24} />
          </a>
        </div>
      </div>

      <div>
        <p>gm</p>
        <p className="mt-4">
          i&apos;m arjanjohan, a web3 developer and builder. i&apos;m always doing some hackathon, and love to team up
          with new people and build cool things.
        </p>
        <p className="mt-4">
          currently i&apos;m participating in buidlguild batch #9, and i look forward to meeting everyone of you and
          seeing what we can build together.
        </p>
        <b>my next hackathons:</b>
        <ul className="list-disc list-inside">
          <li>Aptos Code Collision</li>
          <li>Solana Radar Hackathon</li>
          <li>ETHGlobal Bangkok</li>
        </ul>
      </div>
    </div>
  );
};
