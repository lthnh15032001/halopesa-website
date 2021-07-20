import React from "react"
import styled from "styled-components"
import { Container } from "../../global"
import { LogoHalopesa } from "../navigation/LogoHalopesa"


const Footer = () => (
  <FooterWrapper id="footer">
    <Container className="border-bottom pt-2 pb-2">
      sdadas
    </Container>
    <FooterColumnContainer className="pt-2">
      <div>
        <ul>
          <li>About us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Product & Services</li>
          <li>Mobile Packages</li>
          <li>Mobile Internet</li>
          <li>Social Network</li>
          <li>VAS Services</li>
          <li>Devices</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Support</li>
          <li>News</li>
          <li>FAQS</li>
          <li>Find a store</li>
          <li>Repair & Warranty</li>
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
          <li>My Halotel App</li>
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
  margin: 64px 0 0;
  padding: 0px 0 80px;
`

const FooterColumnContainer = styled(Container)`
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
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
`

export default Footer
