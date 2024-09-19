import React from "react";
import Image from "next/image";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import Arrow_Icon from "~~/public/arrow_icon";
import heartIcon from "~~/public/heart_icon.svg";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950">
      <div className="">
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-10 md:bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div>
                <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>{nativeCurrencyPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
            {isLocalNetwork && (
              <>
                <Faucet />
                <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <span>Block Explorer</span>
                </Link>
              </>
            )}
          </div>
          <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
        </div>
      </div>
      <div className="max-w-lg lg:max-w-2xl mx-auto text-st_gray">
        <div className="text-[11px] sm:text-sm lg:text-base flex gap-2 justify-between mx-4 sm:mx-10">
          <Link
            href="https://github.com/scaffold-eth/se-2"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center "
          >
            <p>Fork me</p>
            <Arrow_Icon />
          </Link>

          <div className="flex gap-2 items-center">
            <p className="flex-shrink-0">Built with</p>
            <Image src={heartIcon} alt="heart icon" width={20} height={20} />
            <p>at</p>
            <Link href="https://buidlguidl.com/" target="_blank" rel="noreferrer" className="flex gap-2 items-center ">
              <BuidlGuidlLogo className="w-3 h-5 pb-1" />
              <p>BuidlGuidl</p>
            </Link>

            <Arrow_Icon />
          </div>

          <div className="flex items-center gap-2">
            <Link href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" target="_blank" rel="noreferrer">
              Support
            </Link>

            <Arrow_Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <ul className="menu menu-horizontal w-full">
  <div className="flex justify-center items-center gap-2 text-sm w-full">
    <div className="text-center">
      <a href="https://github.com/scaffold-eth/se-2" target="_blank" rel="noreferrer" className="link">
        Fork me
      </a>
    </div>
    <span>·</span>
    <div className="flex justify-center items-center gap-2">
      <p className="m-0 text-center">
        Built with <HeartIcon className="inline-block h-4 w-4" /> at
      </p>
      <a
        className="flex justify-center items-center gap-1"
        href="https://buidlguidl.com/"
        target="_blank"
        rel="noreferrer"
      >
        <BuidlGuidlLogo className="w-3 h-5 pb-1" />
        <span className="link">BuidlGuidl</span>
      </a>
    </div>
    <span>·</span>
    <div className="text-center">
      <a href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA" target="_blank" rel="noreferrer" className="link">
        Support
      </a>
    </div>
  </div>
</ul> */
}
