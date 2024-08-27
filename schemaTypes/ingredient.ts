import { defineType, defineField, defineArrayMember } from 'sanity'

export const ingredient = defineType({
  type: "document",
  name: "ingredient",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "tags",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
  ],
});

