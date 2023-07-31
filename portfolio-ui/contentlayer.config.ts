import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    image: {type: 'string', required: false}
  },
  computedFields: {
    url: { type: 'string', resolve: (blog) => `/blogs/${blog._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'content/blogs', documentTypes: [Blog] })