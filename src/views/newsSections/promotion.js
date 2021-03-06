import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { Image } from '../../components/common/image'
import {
    Card, CardText, CardBody,
} from 'reactstrap';

const Promotion = () => {
    const img = useStaticQuery(graphql`
    query {
        news: file(sourceInstanceName: { eq: "product" }, name: { eq: "news" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        news2: file(sourceInstanceName: { eq: "product" }, name: { eq: "news2" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        news3: file(sourceInstanceName: { eq: "product" }, name: { eq: "news3" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
  `)
    return (
        <SectionStyled>
            <ContainerStyled>
                <div className="row">
                    <div className="text1 pb-3">Halopesa's Promotions</div>
                    {/* <h5 className="my-2">How to buy Airtime and Bundles through HALOPESA </h5>
                    <div className=''>
                        <div >Access prepaid services from your account. Buy for yourself or buy to others in real-time. You can buy airtime quickly and conveniently using your HaloPesa account. Simply by doing the following: <span style={{ fontWeight: 'bold' }}>Dial *150*88# and select ‘3’ for airtime and bundles.</span>
                        </div>
                    </div>
                    <h5 className="pt-3">The Bundles provided through HaloPesa are as follows:</h5> */}
                </div>
                <Flex col={3}>
                    <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>SAFETY GUARD YOUR HALOPESA ACCOUNT</strong> </CardText>
                            <div >
                                HaloPesa cares for the safety of your account, hence do not share your PIN number with anybody in order to avoid the following;
                                <ul>
                                    <li><strong>⦁	Robbery from your account</strong></li>
                                    <li><strong>⦁	Your account to be used in fraud activities</strong></li>
                                </ul>
                                If ever you forget your HaloPesa PIN number kindly call 100 our call center or send us a Whatsapp message through <a href="tel:0622 100 100">0622 100 100</a> in order to reset your PIN number.
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news2.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>HaloPesa Family is there for you!!</strong></CardText>
                            <div className="text-center">
                                HaloPesa or Halotel will not contact you with any other number than the Call center communication numbers which are <span className="text-danger"><strong>100</strong></span> and <span className="text-danger"><strong>0622 100 100</strong></span>. HaloPesa and their representatives <span className="text-danger"><strong>WILL NOT</strong></span> ask you for your HaloPesa PIN number.
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news3.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>SAVE 5% WHEN BUYING BUNDLES.</strong></CardText>
                            <div>
                                <span>- HaloPesa cares about our customers and dude to that it brings an <strong>OFFER LIKE NEVER BEFORE</strong> to enable you our customer to buy bundles with the discount of 5% from HaloPesa. <br /></span>
                                <span>- With varieties of bundles that HaloPesa has this Offer is what you need, Bundles that will save you through the week and even through the month, from the best internet to voice bundles that will enable you to talk to your loved ones constantly. <br /></span>
                                <span>- Now you can <strong>SAY BYE BYE</strong> to hustling, you can get the bundle of your choice anytime and anywhere.<br /></span>
                            </div>
                        </CardBody>
                    </Card>
                </Flex>

            </ContainerStyled>
        </SectionStyled>
    )
}
export default Promotion

const SectionStyled = styled(Section)`
    padding: 50px 0;

`
const ContainerStyled = styled(Container)`
    .text1 {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align:center;
    }
    ul {
        li {
            list-style-type: none 
        }
    }
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: 30px;
    justify-content: start;
    padding-top: 10px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
    }
`