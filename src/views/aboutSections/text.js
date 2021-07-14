import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components'
const Text = () => {

    return (
        <SectionStyled>
            <Container>
                <div>
                    Our customers can access the HaloPesa service through the USSD code *150*88# OR the Android/iOs Application namely the HaloPesa App. <br />
                    The HaloPesa App brings to our customers one of its kind and the best user experience with  bundles of services including Send Money , withdraw , Pay for goods & Services,  Personal Savings, Transfers to Bank accounts etc. <br />
                    The HaloPesa customers are in for a treat due to the fact that the App is designed to make their transactions easier, better and safer. <br />
                    HaloPesa is determined to make your life easier and simple by giving you control just at the tip of your fingerprints. HaloPesa allows its customer to send and receive money quickly and safely and in the comfort of your own home 24/7. HaloPesa has the affordable prices for transaction, it’s a wide spread network and it is easy and safe to use. <br />
                    HaloPesa is determined to bring diversity to the services that it provides whereby such services are as follows: <br />

                </div>
            </Container>
        </SectionStyled>
    )
}
export default Text

const SectionStyled = styled(Section)`
    background-color: ${props => props.theme.color.background.light};
   
`