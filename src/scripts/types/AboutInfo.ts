export interface AboutInfo {
  username: string;
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
}
