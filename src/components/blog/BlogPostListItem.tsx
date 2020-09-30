import React from 'react'
import dayjs from 'dayjs'
import { BlogPost } from '../../interfaces/BlogPost'
import PageListItem from '../PageListItem'

interface BlogPostListItemProps {
  post: BlogPost
}

const BlogPostListItem: React.FC<BlogPostListItemProps> = ({ post }) => {
  return (
    <PageListItem
      linkTo={post.fields.slug}
      size={post.frontmatter.size}
      images={post.frontmatter.images}
      tech={post.frontmatter.tech}
      date={post.fields.date ? dayjs(new Date(post.fields.date)).format('MMMM D YYYY') : undefined}
      excerpt={post.excerpt}
      banner={post.frontmatter.banner}
      banners={post.frontmatter.banners}
      title={post.frontmatter.title}
    />
  )
}

export default BlogPostListItem
