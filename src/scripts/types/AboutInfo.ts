export interface AboutInfo {
  username: string;
  avatarUrl: string;
  alias?: string;
  media?: {
    iconRef: string;
    url: string;
  }[];
  stacks?: {
    iconRef: string;
    name: string;
  }[];
}
