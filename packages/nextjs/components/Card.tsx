import Link from "next/link";
import Arrow_Icon from "~~/components/Arrow_Icon";

type Props = {
  mainText: string;
  footerText: string;
  footerLink: string;
};

const Card = ({ mainText, footerText, footerLink }: Props) => {
  return (
    <div className="shadow-sm border rounded-xl w-[16rem] h-[12rem] font-light mt-6 border-zinc-500 flex flex-col">
      <div className="w-full flex items-center justify-center flex-grow-[5] dark:hover:bg-zinc-800 px-4 hover:bg-zinc-300 transition-all rounded-t-xl">
        {mainText}
      </div>

      <hr className="border-t border-zinc-500" />

      <div className="hover:bg-st_cyan/10 rounded-b-xl transition-all border-zinc-500 flex-grow">
        <Link href={footerLink} target="_blank" passHref className="flex items-center justify-between h-full px-4">
          <p className="font-medium flex flex-col items-center justify-center">{footerText}</p>

          <Arrow_Icon />
        </Link>
      </div>
    </div>
  );
};

export default Card;
