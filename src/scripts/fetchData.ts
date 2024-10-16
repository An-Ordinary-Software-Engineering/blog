import { getEntry } from "astro:content";
import { type Author } from "./types/Author";

const fetchAuthorData = async (key: string) => {
  const authorInfo = await getEntry("authors", key);
  const description = await getEntry("descriptions", key);

  if (authorInfo === undefined || description === undefined) {
    return null;
  }
  const data: Author = authorInfo.data;
  return { data, description };
};

export const fetchAll = async () => {
  const keys = ["aose", "csvitor-dev"];

  const content = await Promise.all(
    keys.map(async (key) => {
      return await fetchAuthorData(key);
    })
  );
  return content.filter((c) => c !== null);
};
