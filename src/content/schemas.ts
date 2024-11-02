import { z, defineCollection, reference } from "astro:content";
export const currentYear = new Date().getFullYear();

export const authorCollection = defineCollection({
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

export const brandCollection = defineCollection({
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

export const descriptionCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: reference("authors"),
  }),
});

export const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    difficulty: z.enum(["easy", "medium", "hard"]),
    title: z.string(),
    heroImg: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
  }),
});
