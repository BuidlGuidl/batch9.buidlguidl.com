export type Builder = {
  profileLink: string;
  address?: `0x${string}`;
  checkedIn: boolean;
};

export type Mentor = Builder & {
  name: string;
  image: string;
};
