import { z, defineCollection, reference } from "astro:content";

const authorCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatarUrl: z.string().url(),
    media: z
      .array(
        z.object({
          iconRef: z.string(),
          name: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
    stacks: z
      .array(
        z.object({
          iconRef: z.string(),
          name: z.string(),
        })
      )
      .optional(),
  }),
});

const descriptionCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: reference("authors"),
  }),
});

export { authorCollection, descriptionCollection };
