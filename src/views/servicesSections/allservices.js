import React from 'react'
import styled from 'styled-components';
import { Container, Section } from "../../components/global"
import { CardServices } from '../../components/CardServices'
import { graphql, useStaticQuery } from "gatsby"
import { TitleRes } from '../../components/TitleRes'
const AllServices = () => {
  const serviceBrief = useStaticQuery(graphql`
    query {
      serviceBrief: file(sourceInstanceName: { eq: "product" }, name: { eq: "ipx" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      sendmoney: file(sourceInstanceName: { eq: "product" }, name: { eq: "sendmoney" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      withdraw: file(sourceInstanceName: { eq: "product" }, name: { eq: "withdraw" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      qrscan: file(sourceInstanceName: { eq: "product" }, name: { eq: "qrscan" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      airtime: file(sourceInstanceName: { eq: "product" }, name: { eq: "airtime" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bill: file(sourceInstanceName: { eq: "product" }, name: { eq: "bill" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bank: file(sourceInstanceName: { eq: "product" }, name: { eq: "bank" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Container>
        <TitleRes
        className="m-md-3"
          name="Halopesa For You"
          des="HaloPesa is determined to make your life easier and simple by giving you control just at the tip of your fingerprints. HaloPesa allows its customer to send and receive money quickly and safely and in the comfort of your own home 24/7. HaloPesa has the affordable prices for transaction, it’s a wide spread network and it is easy and safe to use.
          "
        />
        <Flex>
          <div>
            <CardServices vertical={true} className="text-center" imgWidth="80px"name="Send and receive money" fluid={serviceBrief.sendmoney.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). "/>
            <CardServices vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="Cash out money from agents" fluid={serviceBrief.withdraw.childImageSharp.fluid} text="Customers can withdraw quickly and conveniently at more than 20.000  our Agent around Tanzania but also through HaloPesa you can withdraw through Umoja ATM and rest assured to have easy access to money anywhere you are."  />
            <CardServices vertical={true} className="text-center" imgWidth="80px" name="HaloYako" fluid={serviceBrief.qrscan.childImageSharp.fluid} text="HaloYako is a digital finance product designed by FINCA Microfinance Bank in partnership with Halotel for mobile customers. HaloYako enables users to save their money safely and enjoy instant access to small loans."  />
          </div>
          <div>
            <CardServices vertical={true} className="text-center" imgWidth="80px" name="Buy airtime and bundles" fluid={serviceBrief.airtime.childImageSharp.fluid} text="- Top up airtime at anytime from anywhere with discount up to 5% - Buy bundle with the best promotion for voice, sms and data which only have on HaloPesa. " />
            <CardServices vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="Pay bills such as LUKU" fluid={serviceBrief.bill.childImageSharp.fluid} text="Pay your recurring bills (as electricity, government service, TV subscription,betting…)  with the ease and convenience via HaloPesa. " />
          </div>
          <div>
            <CardServices vertical={true} className="text-center" imgWidth="80px"  name="Bank Transaction" fluid={serviceBrief.bank.childImageSharp.fluid} text="HaloPesa customers can now send money to the bank and withdraw money from the bank without the actual visit to the bank branch or ATM, it is very convenient and reliable. But also it gives you the control of your accounts in the comfort of your own home. "  />
            <CardServices vertical={true} className="text-center mt-3 mb-3" imgWidth="80px" name="HaloPesa Visa on mobile" fluid={serviceBrief.bank.childImageSharp.fluid} text="Pay your invoice at a large of our Merchant Network (as HaloPesa Merchant, M-Pesa Merchant, Tigo Pesa Merchant, Visa and Masterpass Agent)"  />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default AllServices;


const Flex = styled.div`
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 32px;
  }
  
`