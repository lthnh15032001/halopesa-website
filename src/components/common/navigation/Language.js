import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'
import { Image } from '../image'
import { graphql, useStaticQuery } from "gatsby"
import { changeLocalize, getCurrentLocale } from '../../../utils/localize';
const Language = () => {
    const lang = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "lang" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    return (<div className=" d-flex flex-row pl-3 pr-3">
        <Image display smWidth="18px" className="d-flex justify-content-center align-items-center" width="20px" fluid={lang.file.childImageSharp.fluid} />
        <div className="mr-2">
            <LinkStyle onClick={() => changeLocalize()} lang={getCurrentLocale() === "en"} first className="english" to="/">English</LinkStyle>
        </div>
        <div>
            <LinkStyle onClick={() => changeLocalize()} lang={getCurrentLocale() === "vi"} to="/">Vietnamese</LinkStyle>
        </div>
    </div>)
}

export default Language

const LinkStyle = styled(Link)`
    color: ${props => props.lang ? "primary" : "white"};
    padding-right: ${props => props.first ? "10px" : 0};
    padding-left: ${props => props.first ? "5px" : 0}
`