import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image = ({ fluid, width, onClick, style, className, display, smWidth }) => {

  return <ImageWrapper onClick={onClick && onClick} style={style && style} className={className && className}>
    <StyledImage width={width} smWidth={smWidth} fluid={fluid} display={display} />
    <br />
  </ImageWrapper>
}


const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: ${props => props.width ? props.width : "500px"};
@media(max-width: ${props => props.theme.screen.md}) {
  width: ${props => props.width ? props.width : "500px"};
}
@media(max-width: ${props => props.theme.screen.sm}) {
  width: ${props => props.smWidth ? props.smWidth : "180px"};
  display: ${props => props.display ? props.display : "none"};
}
`
