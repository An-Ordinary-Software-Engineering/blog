import { Difficulty } from "./types/post_data";

export function getBgClass(diff: Difficulty): string {
  switch (diff) {
    case Difficulty.easy:
      return "bg-easy";
    case Difficulty.medium:
      return "bg-medium";
    case Difficulty.hard:
      return "bg-hard";
  }
}
