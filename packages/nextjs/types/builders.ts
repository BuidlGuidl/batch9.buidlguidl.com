export type Builder = {
  image: string;
  link: string;
  checkedIn: boolean;
};

export type Mentor = Builder & {
  name: string;
};
