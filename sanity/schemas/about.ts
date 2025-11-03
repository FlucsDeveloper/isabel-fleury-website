export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'philosophy',
      title: 'Approach & Philosophy',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'training',
      title: 'Training & Background',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
