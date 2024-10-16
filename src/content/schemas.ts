import { z, defineCollection, reference } from "astro:content";

export const currentYear = new Date().getFullYear();

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

const brandCollection = defineCollection({
  type: "data",
  schema: z.object({
    year: z
      .number()
      .min(currentYear)
      .max(currentYear + 1)
      .nullable(),
    registry: z.string(),
    source: z.string().url(),
    terms: z.array(
      z.object({
        ref: z.string().url(),
        name: z.string(),
      })
    ),
  }),
});

const descriptionCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: reference("authors"),
  }),
});

export { authorCollection, brandCollection, descriptionCollection };
