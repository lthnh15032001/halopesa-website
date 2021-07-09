import React from 'react'
// import Img from "gatsby-image"
import styled from "styled-components"
import { Container, Section } from "../../components/global"
import { Button } from '../../components/Button'
import { graphql, useStaticQuery } from "gatsby"
import { Image } from '../../components/common/image'
const News = () => {
  const img = useStaticQuery(graphql`
    query {
        img1: file(sourceInstanceName: { eq: "product" }, name: { eq: "img1" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(sourceInstanceName: { eq: "product" }, name: { eq: "img2" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img3: file(sourceInstanceName: { eq: "product" }, name: { eq: "img3" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <StyledContainer>
        <Flex className="d-flex align-items-center">
          <h1>News and <br /> Promotions</h1>
          <Button name="Read more" />
        </Flex>
        <Flex className="d-flex align-items-center mt-4 row flex-row">
          <div className="col-4">
            <Image fluid={img.img1.childImageSharp.fluid} width="350px" />
            <Title>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </Title>
            <Descrip className="mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Descrip>
          </div>
          <div className="col-4">
            <Image fluid={img.img2.childImageSharp.fluid} width="350px" />
            <Title>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </Title>
            <Descrip className="mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Descrip>
          </div>
          <div className="col-4">
            <Image fluid={img.img3.childImageSharp.fluid} width="350px" />
            <Title>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </Title>
            <Descrip className="mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Descrip>
          </div>
        </Flex>
      </StyledContainer>
    </StyledSection>
  )
}

export default News
const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const Title = styled.div`
  color: #090909;
  font-weight: 900;
  font-size: 20px;
`
const Descrip = styled.div`
  color: #7A7A7A;
`