import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
// import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Image } from '../../components/common/image'

import { TitleRes } from '../../components/TitleRes'
const HalopesaApp = () => {
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
    return (
        <StyledSection>
            <StyledContainer>
                <TitleRes
                    name="HALOPESA APP"
                    des=" "
                />
                <div className="flex-row d-flex img-res pt-2 justify-content-center align-items-center">
                    <a target="__blank" href='https://itunes.apple.com/us/app/id1532695595'>
                        <Image display smWidth='142px' width="170px" fluid={data.appstore.childImageSharp.fluid} />
                    </a>
                    <a target="__blank" href='https://play.google.com/store/apps/details?id=com.halopesa.eu'>
                        <Image display smWidth='142px' width="170px" fluid={data.ggplay.childImageSharp.fluid} />
                    </a>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-lg-6 col-md-6">
                        <h5 className="text-center text2">About this App:</h5>
                        <ul>
                            <li>Mobile money is the easiest, fastest and affordable way to send and receive money and also make other transactions anywhere and at any time.</li>
                            <li>HaloPesa, the best mobile money service in Tanzania that is determined to bring you the best mobile money experience at the power of your fingertips by launching the HaloPesa App. The App brings to our customers the best mobile money experience and through the HaloPesa App our customers can send and receive money to and from their loved ones, pay for commodities, access their bank accounts and be able to make other digital payments at anytime and anywhere.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6">
                        <h5 className="text-center text2">App Features:</h5>
                        <ul>
                            <li>Secured log in access to your HaloPesa account with you 4 digit code. Remember to keep your code secret and for your eyes only.</li>
                            <li>Send money to other HaloPesa and non HaloPesa customer with ease.</li>
                            <li>Purchase airtime and bundles with convenience.</li>
                            <li>View your transaction history with the full history feature in your HaloPesa App.</li>
                            <li>Check your account balance anytime and anywhere.</li>
                            <li>Make payments to different merchants by just selecting within the option given to you by the HaloPesa App.</li>
                            <li>Make Payments through QR code in paying the merchants.</li>
                            <li>Transfer money from your virtual wallet to your bank account.</li>
                            <li>Participate in different extra curriculum activities such as betting, and be able to place your bet through the HaloPesa App.</li>
                            <li>Be able to make government payment with just a single tap.</li>
                            <li>Manage your HaloPesa App anytime and anywhere with the condition that you have the access of data connection. </li>
                            <li>Cash out from the many agents in your surroundings.</li>
                            <li>Reverse a transaction in the spot without any loss.</li>
                            <li>Make various payments such as paying bill at the power of your fingertips.</li>
                            <li>Choose between the language Swahili and English for your comfort ability. </li>
                            <li>Install HaloPesa App to get 1GB and 10 minutes for free</li>
                        </ul>
                    </div>
                </div>
            </StyledContainer>
        </StyledSection>
    )
}
export default HalopesaApp
const StyledContainer = styled(Container)`
  .text2 {
      font-size: 20px
  }
    @media (max-width: ${props => props.theme.screen.md}) {
      .text-des { 
        text-align:center
      }
      h2 {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align:center;
        }
  }
`

const StyledSection = styled(Section)`
// background-color: ${props => props.theme.color.background.light}
`
