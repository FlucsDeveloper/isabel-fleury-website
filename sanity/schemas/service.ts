export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon (emoji)',
      type: 'string',
      description: 'Single emoji icon for the service',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for service cards',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Book a Session',
    },
  ],
}
