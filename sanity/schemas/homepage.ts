export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'servicesHeading',
      title: 'Services Section Heading',
      type: 'string',
    },
    {
      name: 'servicesDescription',
      title: 'Services Section Description',
      type: 'text',
    },
  ],
}
