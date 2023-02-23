import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill'} }],
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'text',
    },
    {
      name: 'linkToBuild',
      title: 'Link To Build',
      type: 'url',
    },
    {
      name: 'gitHubLink',
      title: 'GitHub Link',
      type: 'url',
    },
  ],
})
