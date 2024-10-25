export type Difficulty = "easy" | "medium" | "hard";

export interface Post {
  difficulty: Difficulty;
  title: string;
  link: string;
  heroImg: {
    src: string;
    alt: string;
  };
  description: string;
}
