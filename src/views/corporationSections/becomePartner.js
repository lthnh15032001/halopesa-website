import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components';
import { Image } from "../../components/common/image"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "../../components/Button"
import { TitleRes } from '../../components/TitleRes';
const BecomePartner = () => {
  const corporationbrief = useStaticQuery(graphql`
    query {
        corporationbrief: file(sourceInstanceName: { eq: "product" }, name: { eq: "corporation" }) {
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
          className="d-md-block d-lg-none d-block"
          name="For Corpration"
          des="HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.    "
        />
        <Flex col={2} className="flex-row-reverse d-md-flex d-block">
          <div>
            <Image display smWidth="340px" fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />
          </div>
          <div className="w-100">
            <div className="d-none d-md-none d-lg-block" style={{ color: "#7A7A7A", width: "85%" }}>HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.</div>
            <div className="d-flex d-md-block justify-content-center align-items-center">
              <Button className="mt-md-4 mt-2" name="Become a Partner" />
            </div>
          </div>
        </Flex>
        <Flex col={4}>
          <div className="d-md-flex justify-content-center mr-4">
            <Number className="col-6">
              <div className="number">1,000,000+</div>
              <div className="des">Transactions</div>
            </Number>
          </div>
          <div className="d-flex justify-content-center mr-4">
            <Number className="col-6">
              <div className="number">500+</div>
              <div className="des">Customers</div>
            </Number>
          </div>
          <div className="d-md-flex justify-content-center mr-4">
            <Number className="col-6">
              <div className="number">1,000,000+</div>
              <div className="des">Transactions</div>
            </Number>
          </div>
          <div className="d-flex justify-content-center mr-4">
            <Number className="col-6">
              <div className="number">500+</div>
              <div className="des">Customers</div>
            </Number>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default BecomePartner


const Flex = styled.div`
    display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  padding-top: 20px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`

const Number = styled.div`
  .number {
    font-weight: bold;
    font-size: 40.3929px;
    letter-spacing: -1.59256px;
    color: #F36000;
    margin-top: 30px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      margin-top: 10px;
      font-size: 32.3929px;
    }
  }
  .des {
    font-size: 20.8977px;
    @media (max-width: ${props => props.theme.screen.xs}) {
      font-size: 17.8977px;
    }
  }
`