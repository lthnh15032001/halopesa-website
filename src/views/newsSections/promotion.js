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
    }
  `)
    return (
        <Section>
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center w-100">
                    <h1>Promotions</h1>
                    <div className="text-center" style={{ width: "60%", color: "#7A7A7A" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                </div>
                <Flex col={3}>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                    <Card className="shadow border-0 mt-4">
                        <Image fluid={img.news.childImageSharp.fluid} width="368px" />
                        <CardBody className="pt-0">
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>

                </Flex>

            </Container>
        </Section>
    )
}
export default Promotion


const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: 30px;
    justify-content: start;
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
`