import Image from "next/image";
import { Builder } from "~~/types/builders";
import Link from 'next/link';

type ProfilePictureProps = {
  person: Builder;
};

export const BuilderPicture = ({ person }: ProfilePictureProps) => {
  return (
    <div className="text-center">
      <Link href={person.link} className="link" rel="noopener noreferrer">
        <Image
          width={100}
          height={100}
          className="w-24 h-24 rounded-full mx-auto"
          src={person.image}
          alt={person.link}
        />
        See profile
      </Link>
    </div>
  );
};
