import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Container } from "../../components/global"
// import Img from "gatsby-image"
import { CardServices } from '../../components/CardServices'
import { Button } from '../../components/Button'
import { Image } from '../../components/common/image'

const Services = () => {
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
  return <StyledSection>
    <StyledContainer>
      <div className="row text-center">
        <h1>Services</h1>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div style={{ width: '60%' }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <a href="/" className="mt-3 mb-3">Learn more</a>
      </div>
      <Flex className="flex-row d-flex mt-4">
        <div className="col-4 ">
          <CardServices name="Send Money" fluid={serviceBrief.sendmoney.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
          <CardServices name="Withdraw" className="mb-3 mt-3" fluid={serviceBrief.withdraw.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
          <CardServices name="QR Scan" fluid={serviceBrief.qrscan.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
        </div>
        <div className="col-4 justify-content-center align-items-center d-flex flex-column">
          <Image fluid={serviceBrief.serviceBrief.childImageSharp.fluid} width="280px" />
          <Button name="Tariff" />
          <div style={{ marginTop: 40 }}>
            <a href="/">How to use</a>
          </div>
        </div>
        <div className="col-4 ">
          <CardServices name="Airtime & Bundle" fluid={serviceBrief.airtime.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
          <CardServices name="Bills Payment" className="mb-3 mt-3" fluid={serviceBrief.bill.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
          <CardServices name="Bank Transaction" fluid={serviceBrief.bank.childImageSharp.fluid} text="HaloPesa corporates with all Mobile Financial Service Providers (MFSP) and Banks in Tanzania. Therefore HaloPesa customers can easily send to and receive money from MFSPs (as TigoPesa, M-Pesa, Airtel Money) and Banks (as CRDB, NMB, FINCA). " />
        </div>
      </Flex>
    </StyledContainer>
  </StyledSection>
}

export default Services

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
`
const StyledContainer = styled(Container)``

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`