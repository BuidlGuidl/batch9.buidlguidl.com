import Image from "next/image";
import { Builder } from "~~/types/builders";

type ProfilePictureProps = {
  builder: Builder;
  key: number;
};

export const ProfilePicture = ({ builder, key }: ProfilePictureProps) => {
  return (
    <div key={key} className="text-center">
      <a
        href={builder.link}
        className="mt-2 block text-blue-600 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={100}
          height={100}
          className="w-24 h-24 rounded-full mx-auto"
          src={builder.image}
          alt={builder.link}
        />
        See profile
      </a>
    </div>
  );
};
