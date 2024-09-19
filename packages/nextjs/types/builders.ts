export type Builder = {
  image: string;
  profileLink: string;
  address?: `0x${string}`;
  checkedIn: boolean;
};

export type Mentor = Builder & {
  name: string;
};
