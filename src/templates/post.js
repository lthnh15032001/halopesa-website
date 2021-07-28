import React from "react"
import SEO from '../components/common/layout/seo'
export default function Template(data) {
  console.log({data:data})
  const { pageContext } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = pageContext
  return (
    <div className="blog-post-container">
      <SEO
        title={pageContext.title}
        description={pageContext.description}
        image={pageContext.image && pageContext.image}
      />

      {/* <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div> */}
    </div>
  )
}
