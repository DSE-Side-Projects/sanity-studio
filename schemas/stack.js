import { MdComputer } from "react-icons/md"

export default {
  name: "stack",
  title: "Stack",
  type: "document",
  icon: MdComputer,
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "language",
            },
          ],
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      name: "docs",
      title: "Stack Docs URL",
      type: "url",
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "logo",
      title: "Stack Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
      subtitle: "languages.0.title",
    },
  },
}
