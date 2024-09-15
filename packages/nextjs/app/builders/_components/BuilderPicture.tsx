import Image from "next/image";
import { Builder } from "~~/types/builders";

type ProfilePictureProps = {
  person: Builder;
};

export const BuilderPicture = ({ person }: ProfilePictureProps) => {
  return (
    <div className="text-center">
      <a href={person.link} className="link" target="_blank" rel="noopener noreferrer">
        <Image
          width={100}
          height={100}
          className="w-24 h-24 rounded-full mx-auto"
          src={person.image}
          alt={person.link}
        />
        See profile
      </a>
    </div>
  );
};
