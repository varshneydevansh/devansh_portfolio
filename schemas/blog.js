import author from './author'
export default{
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of:[
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Rember to add alternative text`,
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'metadescription',
            type: 'string',
            title: 'Meta Description'
        },
        {
            title: 'Blog Image',
            name: 'blogimage',
            type: 'image',
            options:{
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options:{
                        isHighlighted: true
                    }
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution'
                }
            ]
        },
        {
            title: 'Launch Schedule At',
            name: 'launchAt',
            type: 'datetime',
            options:{
                dateFormat: 'DD-MM-YYYY',
                timeFormat: 'HH:mm',
                timeStep: 5,
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'author',
            type: 'object',
            fields: [
                {
                    title: 'Author',
                    name: 'author',
                    type: 'reference',
                    to: [{type: 'author'}]
                }
            ]
        }
    ],
}