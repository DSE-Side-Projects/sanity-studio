export default {
  name: "screenshot",
  title: "Screenshot",
  type: "object",
  fields: [{
    "name": "image",
    "title": "Image",
    "type": "image",
    options: {
      hotspot: true,
    },
  },
  {
    name: "screenshotMetadata",
    title: "Screnshot Metadata",
    type: "metadata",
  },
]}
