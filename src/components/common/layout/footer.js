import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../../global"
import { LogoHalopesa } from "../navigation/LogoHalopesa"


const Footer = () => (
  <FooterWrapper id="footer">
    <Container className="border-bottom pt-2 pb-2">
    </Container>
    <FooterColumnContainer className="pt-2">
      <div>
        <ul>
          <li className="about" onClick={() => {
            navigate("/about")
          }}>About us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="about" onClick={() => {
            navigate("/services")
          }}>Product & Services</li>
          <li><a
            target="__blank"
            href="https://www.facebook.com/Halopesa-107775141421099/" className="social">Social Network</a></li>
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
          <li>Address: 10th Floor, Tanzanite Park, Plot No. 38, South Ursino, New Bagamoyo Road, P.O.Box 34176 Dar es Salaam</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div >
        <ul>
          <li>Halopesa App</li>
          <li>
            <LogoHalopesa />
          </li>
          <li>

          </li>
        </ul>
      </div>

    </FooterColumnContainer>
  </FooterWrapper>
)

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
