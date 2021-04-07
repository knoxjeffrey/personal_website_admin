export const blog = {
  name: "blog",
  label: "Blog",
  folder: "source/blog",
  create: true,
  extension: "html.md.erb",
  format: "frontmatter",
  slug: "{{year}}-{{month}}-{{day}}-{{url_slug}}",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      hint: "This is the title that will appear on the blog."
    }
  ]
}
