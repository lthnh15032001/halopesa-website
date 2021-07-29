import React from "react"
import SEO from '../components/common/layout/seo'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/common/layout/layout"
import { Container, Section } from '../components/global'
import styled from 'styled-components'
export default function Template(data) {
  const { pageContext } = data
  return (
    <Layout>
      <Section>
        <Container>
          <div className="blog-post-container mt-5 mt-md-3">
            <SEO
              title={pageContext.title}
              description={pageContext.description}
              image={pageContext.image && pageContext.image}
            />
            <MDX className="blog-post">
              <h2 className="">{pageContext.title}</h2>
              <p>
                  {pageContext.description}
              </p>
              <MDXRenderer title="My Stuff!">{pageContext.body}</MDXRenderer>
            </MDX>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
const MDX = styled.div`
  img { 
    display: flex;
    margin: auto;
    max-width: 100%;
  }
  @media (max-width: 575px) {
    margin-top: 5rem
  }
  table { 
    border-collapse: collapse;
    width: 100%;
  }
  tr { 
    th { 
      font-weight: bold;
      text-align: center
    }
  }
  table, td, th {  
      border: 1px solid black;
  }
`