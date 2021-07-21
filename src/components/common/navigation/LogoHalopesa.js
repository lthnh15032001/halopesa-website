import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, navigate, useStaticQuery } from "gatsby"
// import { Image } from '../../common/image'
export const LogoHalopesa = (props) => {
  const style = props.styles ? props.styles : {}
  const className = props.className ? props.className : ""
  const halopesaLogo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "halopesa-logo" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper
      style={style}
      onClick={() => navigate("/")}
      className={className}
    >
      <StyledImage fluid={halopesaLogo.file.childImageSharp.fluid} />
      <br />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  align-self: center;
  cursor: pointer;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 130px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 130px;
  }
`
