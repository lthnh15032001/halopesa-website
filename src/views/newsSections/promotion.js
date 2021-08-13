import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { Image } from '../../components/common/image'
import {
    Card, CardText, CardBody,
} from 'reactstrap';
import { TitleRes } from '../../components/TitleRes'

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
        promotion: file(sourceInstanceName: { eq: "product" }, name: { eq: "promote" }) {
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
                        <h5 className="my-2">How to buy Airtime and Bundles through HALOPESA </h5>
                        <div className=''>
                            <div >Access prepaid services from your account. Buy for yourself or buy to others in real-time. You can buy airtime quickly and conveniently using your HaloPesa account. Simply by doing the following: <span style={{fontWeight:'bold'}}>Dial *150*88# and select ‘3’ for airtime and bundles.</span>                                
                            </div>
                        </div>
                        <ul><h5 className="pt-3">The Bundles provided through HaloPesa are as follows:</h5>
                            <li>
                                <ul><h5>- Mega Bundle: </h5>
                                    <li>This is a weekly bundle that provides our customers the comfort ability of enjoying with HaloPesa through the whole week with <strong>1GB + 10Min (Halotel)</strong>  for <strong>1000Tsh and 3GB + 30Min (All Networks)</strong>  for 3000Tsh.</li>
                                </ul>
                            </li>
                            <li>
                                <ul><h5>- Royal Bundle:</h5>
                                    <li>This is a monthly bundle that provides our customers the comfort ability of enjoying with HaloPesa through the whole month with <strong>7GB + 150Min (All Networks) + 400Min (Halotel)</strong> for 10,000Tsh and <strong>15GB + 300Min (All Networks) + 800Min (Halotel)</strong> for 30,000Tsh.</li>
                                </ul>
                            </li>
                        </ul>
                </div>
                <Flex col={3}>
                    <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>Mega Bundle</strong> </CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image display smWidth="340px" fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText className="text-center"><strong>Royal Bundle</strong></CardText>
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
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
    }
`