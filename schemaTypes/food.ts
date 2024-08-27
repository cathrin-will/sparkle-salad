import { defineType, defineField, defineArrayMember } from 'sanity'

export const food = defineType({
  type: "document",
  name: "food",
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
      type: "number",
      name: "price",
    }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
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
    defineField({
      type: "array",
      name: "ingredients",
      of: [
        defineArrayMember({
          type: "ingredient",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "nutrition",
      name: "nutrition",
    }),
  ],
});

