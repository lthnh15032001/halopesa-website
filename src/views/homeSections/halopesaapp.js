import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
// import Img from "gatsby-image"

import { TitleRes } from '../../components/TitleRes'
const HalopesaApp = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <TitleRes
                    name="HALOPESA APP"
                    des=" "
                />
                <div className="row mt-4">
                    <div className="col-12 col-lg-4 col-md-6">
                        <h5 className="text-center text2">About this App:</h5>
                        <ul>
                            <li>Mobile money is the easiest, fastest and affordable way to send and receive money and also make other transactions anywhere and at any time.</li>
                            <li>HaloPesa, the best mobile money service in Tanzania that is determined to bring you the best mobile money experience at the power of your fingertips by launching the HaloPesa App. The App brings to our customers the best mobile money experience and through the HaloPesa App our customers can send and receive money to and from their loved ones, pay for commodities, access their bank accounts and be able to make other digital payments at anytime and anywhere.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
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
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <h5 className="text-center text2">What’s New:</h5>
                        <ul><h5>Promotional content </h5> 
                            <li>The user will be able to view promotional content in the HaloPesa App as to see what is new in the HaloPesa world. </li>
                            <li>The User will be able to catch new products and services that the HaloPesa mobile service will launch.</li>
                            <li>Such information will be displayed so that the user can be up-to-date with new products and services from HaloPesa.</li>
                        </ul>
                        <ul><h5>Security Enhancements</h5> 
                            <li>A user will be provided with a onetime password (OTP) at every transaction whereby the OTP will be sent to the user via SMS to ensure security of the transaction.</li>
                            <li>The user’s transactions will be highly secured and situations such as theft transactions will be avoided.</li>
                        </ul>
                        <ul><h5>Contact Enhancement</h5> 
                            <li>A user will be able to access his/her contacts via the HaloPesa App and hence making such transactions with ease.</li>
                            <li>Users when adding contacts will be able to save their contacts and rest assured be able to use them directly from the App when making transactions.</li>
                        </ul>
                        <ul><h5>Accessibility Enhancement.</h5>
                            <li>User will be able to use the HaloPesa App in any device.</li>
                            <li>User must not register first upon using a different device than the one that is normally in use for the HaloPesa App.</li>
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
background-color: ${props => props.theme.color.background.light}
`
