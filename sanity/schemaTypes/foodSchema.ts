import {defineType, defineField, defineArrayMember} from 'sanity'

export const foodSchema = defineType({
    type: 'document',
    name: 'food',
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
            name: 'description',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'buying',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'storing',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'eating',
            type: 'array',
            of: [{type: 'block'}],
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
        defineField({
            type: 'array',
            name: 'tags',
            of: [
                defineArrayMember({
                    type: 'reference',
                    name: 'tags',
                    to: [{type: 'tag'}],
                }),
            ],
        }),
        defineField({
            type: 'reference',
            name: 'category',
            to: [{type: 'category'}],
        }),
    ],
})
