import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components'
const Text = () => {

    return (
        <SectionStyled>
            <Container>
                <div>
                    <ul><h5>HaloPesa provides merchants and members the ease, convenience, and control of managing payments and transferring funds across multiple channels in real-time anytime, anywhere. With a strong emphasis for simplicity and flexibility, HALOPESA is focused on delivering robust and long term solutions for the security-challenges.</h5>
                        <li>HaloPesa is a licensed Mobile Money service in Tanzania that allows customers to make digital transactions easily, fast and affordably anywhere and at any time.</li>
                        <li>Your Mobile phone is more than just a means of communication it is also your virtual wallet. HaloPesa allows our customers to receive and send money quickly, safely, affordably and conveniently 24/7.</li>
                        <li>HaloPesa, the best mobile money service in Tanzania that is determined to bring you the best mobile money experience at the power of your fingertips. </li>
                        <li>Our customers can access the HaloPesa service through the USSD code *150*88# OR the Android/iOs Application namely the HaloPesa App.</li>
                        <li>The HaloPesa App brings to our customers one of its kind and the best user experience with  bundles of services including Send Money , withdraw , Pay for goods & Services,  Personal Savings, Transfers to Bank accounts etc.</li>
                        <li>The HaloPesa customers are in for a treat due to the fact that the App is designed to make their transactions easier, better and safer. </li>
                        <li>HaloPesa is determined to make your life easier and simple by giving you control just at the tip of your fingerprints. HaloPesa allows its customer to send and receive money quickly and safely and in the comfort of your own home 24/7. HaloPesa has the affordable prices for transaction, it’s a wide spread network and it is easy and safe to use.</li>
                        <li>HaloPesa is determined to bring diversity to the services that it provides whereby such services are as follows: 
                            <ul>
                                <li>Buy airtime and bundles</li>
                                <li>Send and receive money</li>
                                <li>Cash out money from agents and Umoja ATMs</li>
                                <li>Bank transactions</li>
                                <li>Merchant Payment</li>
                                <li>Pay bills</li>
                                <li>HaloPesa Visa on mobile</li>
                                <li>Halo Yako</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Container>
        </SectionStyled>
    )
}
export default Text

const SectionStyled = styled(Section)`
    background-color: ${props => props.theme.color.background.light};
   
`