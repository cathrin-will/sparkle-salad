import { defineType, defineField } from 'sanity'

export const nutrition = defineType({
  type: "object",
  name: "nutrition",
  fields: [
    defineField({
      type: "number",
      name: "calories",
    }),
    defineField({
      type: "number",
      name: "fat",
    }),
    defineField({
      type: "number",
      name: "saturatedFat",
    }),
    defineField({
      type: "number",
      name: "transFat",
    }),
    defineField({
      type: "number",
      name: "cholesterol",
    }),
    defineField({
      type: "number",
      name: "sodium",
    }),
    defineField({
      type: "number",
      name: "carbohydrates",
    }),
    defineField({
      type: "number",
      name: "fiber",
    }),
    defineField({
      type: "number",
      name: "sugar",
    }),
    defineField({
      type: "number",
      name: "protein",
    }),
  ],
});

