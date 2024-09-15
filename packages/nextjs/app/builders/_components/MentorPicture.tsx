import Image from "next/image";
import { Mentor } from "~~/types/builders";

type ProfilePictureProps = {
  person: Mentor;
  key: number;
};

export const MentorPicture = ({ person, key }: ProfilePictureProps) => {
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
        {person.name}
      </a>
    </div>
  );
};
