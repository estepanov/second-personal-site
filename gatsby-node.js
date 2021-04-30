require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
        // startDate field
        createNodeField({
          name: 'startDate',
          node,
          value: date ? new Date(date) : null
        })
        // endDate field
        createNodeField({
          name: 'endDate',
          node,
          value: date ? new Date(date) : null
        })
        // isMain determines if the page is the index page for folder of content
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

  const BlogPostListTemplate = require.resolve('./src/templates/blog-post-list.tsx')
  const BlogPostTemplate = require.resolve('./src/templates/blog-post.tsx')
  const ProjectTemplate = require.resolve('./src/templates/project.tsx')
  const ProjectListTemplate = require.resolve('./src/templates/project-list.tsx')
  const PageTemplate = require.resolve('./src/templates/page.tsx')
  const tagTemplate = require.resolve('./src/templates/tag.tsx')

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
              tech
            }
          }
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges

  const projects = markdownFiles.filter(item => item.node.fileAbsolutePath.includes('/content/projects/'))
  const blogPosts = markdownFiles.filter(item => item.node.fileAbsolutePath.includes('/content/blog/'))

  const { postsPerPage } = postPerPageQuery.data.site.siteMetadata
  const numberProjectPages = Math.ceil(projects.length / postsPerPage)
  const numberBlogPostPages = Math.ceil(blogPosts.length / postsPerPage) || 1 // allow an empty first page

  Array.from({ length: numberBlogPostPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/pages/${i + 1}`,
      component: BlogPostListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nextPage: i === postsPerPage - 1 ? null : i + 2,
        previousPage: i === 0 ? null : i - 1,
        pages: numberBlogPostPages
      }
    })
  })

  Array.from({ length: numberProjectPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/pages/${i + 1}`,
      component: ProjectListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nextPage: i === postsPerPage - 1 ? null : i + 2,
        previousPage: i === 0 ? null : i - 1,
        pages: numberProjectPages
      }
    })
  })

  // generate projects pages
  projects.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: ProjectTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })

  // generate blog post pages
  blogPosts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
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
  markdownFiles
    .filter(item => Array.isArray(item.node.frontmatter.tech) && item.node.frontmatter.tech.length)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tech])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `/technology/${uniqTag}`,
        component: tagTemplate,
        context: {
          tag: uniqTag,
          // this is here for future pagination... but i dont need it right now.
          limit: undefined,
          skip: 0,
        },
      })
    })
}
