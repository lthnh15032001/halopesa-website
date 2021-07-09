import React from 'react'
import { Container, Section } from "../../../components/global"
import styled from 'styled-components';
import { Image } from "../../../components/common/image"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "../../../components/Button"
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
                <Flex col={2} className="flex-row-reverse d-flex">
                    <div>
                        <Image fluid={corporationbrief.corporationbrief.childImageSharp.fluid} />
                    </div>
                    <div className="w-100">
                        <div style={{ color: "#7A7A7A", width: "85%" }}>HaloPesa for corporates (Business Customers) are solutions for businesses that allow organizations to collect funds from their customers on a regular basis through HaloPesa or disburse funds to their customers just by a click of a button. HaloPesa is also a suitable means for Merchants to accept payments (HaloPesa Lipa Hapa) from customers with wallets.</div>
                        <div>
                            <Button className="mt-4" name="Become a Partner" />
                        </div>
                    </div>
                </Flex>
                <Flex col={4}>
                    <div>
                        <Number className="col-6">
                            <div className="number">1,000,000+</div>
                            <div className="des">Transactions</div>
                        </Number>
                    </div>
                    <div>
                        <Number className="col-6">
                            <div className="number">500+</div>
                            <div className="des">Customers</div>
                        </Number>
                    </div>
                    <div>
                        <Number className="col-6">
                            <div className="number">1,000,000+</div>
                            <div className="des">Transactions</div>
                        </Number>
                    </div>
                    <div>
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`

const Number = styled.div`
  .number {
    font-weight: bold;
    font-size: 40.3929px;
    letter-spacing: -1.59256px;
    color: #F36000;
    margin-top: 30px
  }
  .des {
    font-size: 20.8977px;
  }
`