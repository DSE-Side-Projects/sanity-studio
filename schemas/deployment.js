import { GrCloudUpload } from "react-icons/gr"

export default {
  name: "deployment",
  title: "Deployment",
  type: "document",
  icon: GrCloudUpload,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "button",
      title: "Deployment Button Image URL",
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      name: "deploymentUrl",
      title: "Deployment URL",
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "logo",
      title: "Service Logo",
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
    },
  },
}
