export const blog = {
  name: "blog",
  label: "Blog",
  folder: "source/blog",
  create: true,
  extension: "html.md.erb",
  format: "frontmatter",
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  editor: {
    preview: false
  },
  preview_path: "blog/{{title}}",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string"
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
      format: "YYYY-MM-DD HH:mm"
    },
    {
      label: "Tags",
      name: "tags",
      widget: "select",
      multiple: true,
      options: [
        "Tealeaf Academy", "Ruby", "Web development", "RubyMotion", "Rails", "Work",
        "Software engineering", "Web performance"
      ]
    },
    {
      label: "Image",
      name: "banner_image",
      required: false,
      widget: "image"
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown"
    }
  ]
}
