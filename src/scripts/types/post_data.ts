export enum Difficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export interface Post {
  diff: Difficulty;
  image: {
    src: string;
    alt: string;
  };
  title: {
    link: string;
    text: string;
  };
  description: string;
}
