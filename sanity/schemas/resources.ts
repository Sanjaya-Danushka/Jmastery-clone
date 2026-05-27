const schema = {
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "title",
        // maxLength: 96,
      },
    },
    {
      title: "downloadLink",
      name: "downloadLink",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "views",
      name: "views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ["frontend", "backend", "next 13 ", "fullstack", "other"],
      },
    },
  ],
}

export default schema;
