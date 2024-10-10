export type Difficulty = "easy" | "medium" | "hard";

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
