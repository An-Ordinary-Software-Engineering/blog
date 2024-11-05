export type Difficulty = "easy" | "medium" | "hard";

export interface Post {
  difficulty: Difficulty;
  title: string;
  heroImg: {
    src: string;
    alt: string;
  };
  description: string;
  meta: string;
}
