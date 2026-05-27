const schema = {
  name: "resourcesPlaylist",
  title: "Resources Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resources",
      title: "resources",
      type: "array",
      of: [{ type: "reference", to: { type: "resources" } }],
    },
  ],
}

export default schema;
