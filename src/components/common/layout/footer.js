import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../../global"
import { graphql, useStaticQuery } from "gatsby"
import { LogoHalopesa } from "../navigation/LogoHalopesa"
import { Image } from '../image'


const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    appstore: file(sourceInstanceName: { eq: "product" }, name: { eq: "appstore" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ggplay: file(sourceInstanceName: { eq: "product" }, name: { eq: "ggplay" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)
  return <FooterWrapper id="footer">
    <Container className="border-bottom pt-2 pb-2">
    </Container>
    <FooterColumnContainer className="pt-2">
      <div>
        <ul>
          <li className="about" onClick={() => {
            navigate("/about")
          }}>About us</li>
          <li><a
            target="__blank"
            href="https://www.facebook.com/haloteltanzania" className="social">Social Network</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="about" onClick={() => {
            navigate("/services")
          }}>Product & Services</li>

          <li onClick={() => {
            navigate("/news")
          }}>Mobile Packages</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Support</li>
          <li onClick={() => {
            navigate("/news")
          }}>News</li>
          <li onClick={() => {
            navigate("/faqs")
          }}>FAQS</li>
        </ul></div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>VIETTEL TANZANIA PLC <br />(HALOTEL)</li>
          <li>
            <div className="hotline py-2">Hotline: <a href="tel:100" className="text-white"><strong>100</strong></a> or text <a href="tel:0622 100100" className="text-white"><strong>0622 100100</strong></a> on Whatsapp | Email: <a href="mailto: HaloPesa@halotel.co.tz" className="text-white">HaloPesa@halotel.co.tz</a> </div>
          </li>
          <li>Address: 10th Floor, Tanzanite Park, Plot No. 38, South Ursino, New Bagamoyo Road, P.O.Box 34176 Dar es Salaam</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <ul>
          <li>Halopesa App</li>
          <li>
            <LogoHalopesa />
            <div className="d-lg-flex d-md-flex flex-row d-none img-res pt-2 align-items-center">
              <a className="col-6" target="__blank" href='https://itunes.apple.com/us/app/id1532695595'>
                <Image display smWidth='142px' width="150px" fluid={data.appstore.childImageSharp.fluid} />
              </a>
              <a className="col-6" target="__blank" href='https://play.google.com/store/apps/details?id=com.halopesa.eu'>
                <Image display smWidth='142px' width="150px" fluid={data.ggplay.childImageSharp.fluid} />
              </a>
            </div>
          </li>
          <li>

          </li>
        </ul>
      </div>
    </FooterColumnContainer>
    <div className="w-100 d-flex justify-content-center">
      <div style={{ width: "80%" }} className="d-lg-none d-md-none flex-row d-flex img-res pt-2 align-items-center">
        <a className="col-6" target="__blank" href='https://itunes.apple.com/us/app/id1532695595'>
          <Image display smWidth='142px' width="150px" fluid={data.appstore.childImageSharp.fluid} />
        </a>
        <a className="col-6" target="__blank" href='https://play.google.com/store/apps/details?id=com.halopesa.eu'>
          <Image display smWidth='142px' width="150px" fluid={data.ggplay.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  </FooterWrapper >
}

const FooterWrapper = styled.footer`
  background-color: #2e2e2e;
  margin: 0px 0 0;
  padding: 20px 0 80px;
  .about { 
    cursor: pointer!important;
    &:hover {
      color: #337ab7!important
    }
  }
  ul {
    li {
      cursor: pointer;
      &:hover{ 
        color: #337ab7
      }
    }
  }
`

const FooterColumnContainer = styled(Container)`
  .social {
    color: white;
    text-decoration: none;
    &:hover {
      color: #0d6efd
    }
  }
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0px;
  justify-content: start;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
  div {
    color: white
  }
  div:first-child {
    padding: 0
  }
  li:first-child { 
    font-size: 20px;
    padding-bottom: 14px;
    &:hover {
      color: white;
      cursor: default
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
`

export default Footer
