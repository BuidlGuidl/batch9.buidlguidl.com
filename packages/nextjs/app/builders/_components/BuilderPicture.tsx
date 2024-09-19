import Link from "next/link";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { Builder } from "~~/types/builders";

type ProfilePictureProps = {
  person: Builder;
};

export const BuilderPicture = ({ person }: ProfilePictureProps) => {
  return (
    <div className="text-center">
      <Link href={person.profileLink} className="link" rel="noopener noreferrer">
        <BlockieAvatar address={person.address as `0x${string}`} size={100} />
        See profile
      </Link>
    </div>
  );
};
