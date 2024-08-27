import {defineType, defineField, defineArrayMember} from 'sanity'

export const tagSchema = defineType({
    type: 'document',
    name: 'tag',
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
