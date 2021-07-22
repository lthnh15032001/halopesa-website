import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { Image } from '../../components/common/image'
import { Button } from '../../components/Button'
import { TitleRes } from '../../components/TitleRes'
const Intro = () => {
    const img = useStaticQuery(graphql`
    query {
        img: file(sourceInstanceName: { eq: "product" }, name: { eq: "country" }) {
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
                    name="For Agent"
                    des="HaloPesa Agents are spread throughout the country. HaloPesa welcomes every interested individual to join our HaloPesa Family by becoming an Agents as it is exciting and rewarding too. Becoming an HaloPesa Agent is a great business opportunity that allows Agents to earn their monthly revenue following best competitive  commission rates that HaloPesa offers."
                    className="d-block d-md-none"
                />
                <div className="d-md-block d-none">HaloPesa Agents are spread throughout the country. HaloPesa welcomes every interested individual to join our HaloPesa Family by becoming an Agents as it is exciting and rewarding too. <br /> <br />Becoming an HaloPesa Agent is a great business opportunity that allows Agents to earn their monthly revenue following best competitive  commission rates that HaloPesa offers.
                </div>
                <div className="d-grid d-md-none">
                    <Image display smWidth="345px" fluid={img.img.childImageSharp.fluid} />
                </div>
                <Flex col={1} className="d-grid d-md-none pt-0">
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
                <Flex col={3} className="d-none d-md-grid">
                    <div className="d-flex align-items-center flex-column justify-content-center" >
                        <Number>
                            <div className="number">100,000 +</div>
                            <div className="des">Agents</div>
                        </Number>
                        <Number>
                            <div className="number">1,000,000 +</div>
                            <div className="des">Transactions</div>
                        </Number>
                    </div>
                    <div className="d-flex align-items-center flex-column justify-content-center" >
                        <Image display fluid={img.img.childImageSharp.fluid} />
                        <div>
                            <Button name="Become an Agent" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-column justify-content-center">
                        <Number>
                            <div className="number">500+</div>
                            <div className="des">Customers</div>
                        </Number>
                        <Number>
                            <div className="number">500+</div>
                            <div className="des">Customers</div>
                        </Number>
                    </div>
                </Flex>
                <div className="mt-4">
                    All you need is: <br />
                        Sign an Agent Contract.<br />
                    	Invest in an initial capital.<br />
                    What you need to qualify<br />
                    Active Halotel Simcard<br />
                    National ID<br />
                    A valid Business license<br />
                    TIN certificate.<br />
                    Certificate of incorporation or equivalent (If available)<br />
                    Memorandum and Articles of Association (If Available)<br />
                    If you would like to become an agent, Please fill the contact form below and the HaloPesa Agent recruitment team will feedback to you shortly.<br />
                    And you will receive Agent training and Agent material that will help you become the best HaloPesa Agent you can be. Becoming a HaloPesa Agent is FREE.<br />

                </div>
            </Container>
        </Section>
    )
}
export default Intro


const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: 30px;
    justify-content: start;
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screen.xs}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 32px;
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