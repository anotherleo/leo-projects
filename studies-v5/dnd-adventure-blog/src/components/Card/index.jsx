import React from 'react'

export default function Card({post}) {
  return (
    <div>
      <h3>{post.frontmatter.title}</h3>
      <span>{post.frontmatter.date}</span>
      <p>{post.frontmatter.excerpt}</p>
    </div>
  )
}
