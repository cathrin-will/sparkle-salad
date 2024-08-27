import {defineType, defineField, defineArrayMember} from 'sanity'

export const categorySchema = defineType({
    type: 'document',
    name: 'category',
    fields: [
        defineField({
            type: 'string',
            name: 'title',
        }),
        defineField({
            type: 'slug',
            name: 'slug',
            options: {source: 'title'},
        }),
        defineField({
            type: 'text',
            name: 'description',
        }),
        defineField({
            type: 'array',
            name: 'images',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: {hotspot: true},
                }),
            ],
        }),
    ],
})
