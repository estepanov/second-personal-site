const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  switch (node.internal.type) {
    case 'Mdx':
    case 'MarkdownRemark':
      {
        const value = createFilePath({ node, getNode })
        const { permalink, date } = node.frontmatter
        let slug = permalink ? `/${permalink}/` : undefined
        let isMain = false
        if (!slug) {
          const isPage = node.fileAbsolutePath.indexOf('/src/content/pages/')
          if (isPage >= 0) {
            slug = value
          } else {
            const noncontent = node.fileAbsolutePath.indexOf('/src/content/')
            const { length } = '/src/content/'
            const full = path.parse(node.fileAbsolutePath.slice(noncontent + length))
            if (full.name.toLowerCase() === 'index') {
              isMain = true
              slug = `/${full.dir}/`
            } else {
              slug = `/${full.dir}/${full.name}/`
            }
          }
        }
        // Date field
        createNodeField({
          name: 'date',
          node,
          value: date ? new Date(date) : null
        })
        // isMain determine is page is the index page for content
        createNodeField({
          name: 'isMain',
          node,
          value: isMain
        })
        // Slugs determine how we route to content
        createNodeField({
          name: 'slug',
          node,
          value: slug || ''
        })
        const fullPath = node.fileAbsolutePath.match(/src\/content\/(.*)\//)
        const contentFolder = fullPath[1].split('/')[0]
        // types help query content by which folder the content is in
        createNodeField({
          name: 'type',
          node,
          value: contentFolder || ''
        })
      }
      break
    default:
      break
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const ProjectTemplate = require.resolve('./src/templates/project.tsx')
  const PageTemplate = require.resolve('./src/templates/page.tsx')

  const allMarkdownQuery = await graphql(`
    {
      allMarkdown: allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  // const postPerPageQuery = await graphql(`
  //   {
  //     site {
  //       siteMetadata {
  //         postsPerPage
  //       }
  //     }
  //   }
  // `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges

  const projects = markdownFiles.filter(item => item.node.fileAbsolutePath.includes('/content/projects/'))
  // console.log('projectsprojectsprojectsprojectsprojectsprojectsprojectsprojectsprojectsprojects', projects) // generate paginated post list
  // const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage
  // const nbPages = Math.ceil(posts.length / postsPerPage)

  // Array.from({ length: nbPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/` : `/pages/${i + 1}`,
  //     component: ListPostsTemplate,
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       currentPage: i + 1,
  //       nbPages: nbPages,
  //     },
  //   })
  // })

  // generate projects pages
  projects.forEach((post, index, posts) => {
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: ProjectTemplate,
      context: {
        slug: post.node.fields.slug
        // previous,
        // next
      }
    })

    // generate post share images (dev only)
    // if (process.env.gatsby_executing_command.includes('develop')) {
    //   createPage({
    //     path: `${post.node.frontmatter.slug}/image_share`,
    //     component: BlogPostShareImage,
    //     context: {
    //       slug: post.node.frontmatter.slug,
    //       width: 440,
    //       height: 220,
    //     },
    //   })
    // }
  })

  // generate pages
  markdownFiles
    .filter(item => item.node.fileAbsolutePath.includes('/content/pages/'))
    .forEach(page => {
      createPage({
        path: page.node.fields.slug,
        component: PageTemplate,
        context: {
          slug: page.node.fields.slug
        }
      })
    })

  // generate tags
  // markdownFiles
  //   .filter(item => item.node.frontmatter.tags !== null)
  //   .reduce(
  //     (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
  //     []
  //   )
  //   .forEach(uniqTag => {
  //     createPage({
  //       path: `tags/${uniqTag}`,
  //       component: PostsBytagTemplate,
  //       context: {
  //         tag: uniqTag,
  //       },
  //     })
  //   })
}
