export default {
  name: "textWithImageSection",
  title: "Test with Image",
  type: "object",
  fields: [
    {
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: ["Left", "Right"],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) =>
        Rule.error("You have to provide an image position.").required(),
    },
    {
      name: "text",
      title: "Text",
      type: "textSection",
      validation: (Rule) =>
        Rule.error("You have to provide some text.").required(),
    },
    {
      name: "image",
      title: "Image",
      type: "mainImage",
      validation: (Rule) =>
        Rule.error("You have to provide an image.").required(),
    },
  ],
  preview: {
    select: {
      title: "imagePosition",
      subtitle: "text.0.children.0.text",
      media: "image",
    },
    prepare: ({ title, subtitle, media }) => {
      return {
        title: `Text with Image on ${title}`,
        subtitle,
        media,
      };
    },
  },
};
