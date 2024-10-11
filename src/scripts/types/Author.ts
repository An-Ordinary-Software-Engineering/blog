export interface Author {
  name: string;
  avatarUrl: string;
  media?: {
    iconRef: string;
    name: string;
    url: string;
  }[];
  stacks?: {
    iconRef: string;
    name: string;
  }[];
  description: string;
}
