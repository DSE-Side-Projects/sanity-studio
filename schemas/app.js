import { GrAppleAppStore } from "react-icons/gr"

export default {
  name: "app",
  title: "App",
  type: "document",
  icon: GrAppleAppStore,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "url",
      title: "Site URL",
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      name: "github",
      title: "Github repo",
      type: "url",
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
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: Rule => Rule.required().min(10).max(80)
    },
    {
      name: "technology",
      title: "Technology",
      type: "reference",
      to: [{ type: "stack" }],
      validation: Rule => Rule.required()
    },
    {
      name: "screenshot",
      title: "Screenshot",
      type: "screenshot",
    },
    {
      name: "quickstart",
      title: "Auth0 Quickstart URL",
      type: "url",
    },
    {
      name: "docs",
      title: "Auth0 Docs URL",
      type: "url",
    },
    {
      name: "deploy",
      title: "Deployment Service",
      type: "reference",
      to: [{ type: "deployment" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "screenshot.image",
      subtitle: "technology.title",
    },
  },
}
