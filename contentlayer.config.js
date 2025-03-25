import { defineDocumentType, makeSource } from "contentlayer/source-files"
 
const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))
 
export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
})