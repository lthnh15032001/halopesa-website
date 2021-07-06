import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

export const LogoHalopesa = (props) => {
  const style = props.styles ? props.styles : {}
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
      style={style}>
      <StyledImage fluid={halopesaLogo.file.childImageSharp.fluid} />
      <br />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 130px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 130px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 130px;
    display: none;
  }
`
