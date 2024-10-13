import { getEntry } from "astro:content";
import { type Author } from "./types/Author";

const personal = "csvitor-dev";
const org = "aose";

const personalInfo = await getEntry("authors", personal);
const personalDescription = await getEntry("descriptions", personal);
const personalData: Author = personalInfo.data;

const orgInfo = await getEntry("authors", org);
const orgDescription = await getEntry("descriptions", org);
const orgData: Author = orgInfo.data;

export const fetch = () => {
  const info = [
    { data: personalData, description: personalDescription },
    { data: orgData, description: orgDescription },
  ];

  return info.filter(
    (v) => v.data !== undefined && v.description !== undefined
  );
};
