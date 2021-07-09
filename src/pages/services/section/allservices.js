import React from 'react'
import styled from 'styled-components';
import { Container, Section } from "../../../components/global"
import { CardServices } from '../../../components/CardServices'
import { graphql, useStaticQuery } from "gatsby"

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
        <Contain className="d-flex flex-column justify-content-center align-items-center w-100">
          <h1>All Services</h1>
          <div className="text-center" style={{ width: "60%", color: "#7A7A7A" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </Contain>
        <Flex>
          <div>
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.sendmoney.childImageSharp.fluid} name="Send Money" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.airtime.childImageSharp.fluid} name="Send Money"  className="mt-3 mb-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.sendmoney.childImageSharp.fluid} name="Send Money"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
          </div>
          <div>
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.withdraw.childImageSharp.fluid} name="Send Money"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.bill.childImageSharp.fluid} name="Send Money"  className="mt-3 mb-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.sendmoney.childImageSharp.fluid} name="Send Money"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
          </div>
          <div>
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.qrscan.childImageSharp.fluid} name="Send Money"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.bank.childImageSharp.fluid} name="Send Money"  className="mt-3 mb-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
            <CardServices vertical className="text-center" imgWidth="80px" fluid={serviceBrief.sendmoney.childImageSharp.fluid} name="Send Money"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default AllServices;

const Contain = styled.div`

`

const Flex = styled.div`
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`