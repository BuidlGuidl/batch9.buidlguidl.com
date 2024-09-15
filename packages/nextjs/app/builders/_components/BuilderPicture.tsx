import Image from "next/image";
import { Builder } from "~~/types/builders";

type ProfilePictureProps = {
  person: Builder;
  key: number;
};

export const BuilderPicture = ({ person, key }: ProfilePictureProps) => {
  return (
    <div key={key} className="text-center">
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
