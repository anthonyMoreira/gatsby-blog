const Promise = require('bluebird')
const path = require('path')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const tagTemplate = path.resolve('./src/templates/tags.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            tagsGroup: allContentfulBlogPost(limit: 2000) {
              group(field: tags) {
                fieldValue
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const tags = result.data.tagsGroup.group
        tags.forEach((tag, index) => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })
      })
    )
  })
}
