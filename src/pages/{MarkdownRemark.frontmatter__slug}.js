// import React from "react"
// import { graphql } from "gatsby"
// import SEO from '../components/common/layout/seo'
// import styled from 'styled-components'
// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <ContainerBlog className="blog-post-container">
//       <SEO
//         title={frontmatter.title}
//         description={frontmatter.description}
//         image={frontmatter.image}
//       />
//       <Section>
//         <Container>
//           <div className="blog-post">
//             <h1>{frontmatter.title}</h1>
//             <h2>{frontmatter.date}</h2>
//             <div
//               className="blog-post-content"
//               dangerouslySetInnerHTML={{ __html: html }}
//             />
//           </div>
//         </Container>
//       </Section>
//     </ContainerBlog>
//   )
// }

// const ContainerBlog = styled.div`

// `

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//       }
//     }
//   }
// `


// const Section = styled.section`
//   overflow: hidden;

//   @media (max-width: 575px) {
//     padding: 20px 0;
//   }

//   @media (max-width: 767px) {
//     padding: 20px 0;
//   }

//   @media (min-width: 991px) {
//     padding: 80px 0;
//   }
//   background-color:white
// `

// const Container = styled.div`
//   max-width: 1200px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 16px;

//   @media (min-width: 575px) {
//     max-width: 540px;
//   }

//   @media (min-width: 767px) {
//     max-width: 720px;
//   }

//   @media (min-width: 991px) {
//     max-width: 960px;
//   }

//   @media (min-width: 1199px) {
//     max-width: 1200px;
//   }

//   ${props =>
//     props.fluid &&
//     `
//     max-width: 1200px !important;
//   `};
// `