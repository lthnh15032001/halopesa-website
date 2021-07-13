import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { Image } from '../../components/common/image'
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

const News = () => {
    const img = useStaticQuery(graphql`
    query {
        news: file(sourceInstanceName: { eq: "product" }, name: { eq: "customerbusiness" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      newsImg: file(sourceInstanceName: { eq: "product" }, name: { eq: "newsimg" }) {
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
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center w-100">
                    <h1>Halopesa News</h1>
                    <div className="text-center" style={{ width: "60%", color: "#7A7A7A" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                </div>
                <div className="row">
                    <div className="border-0 mt-4 col-6">
                        <div className="bg-white">
                            <Image fluid={img.news.childImageSharp.fluid} width="569px" />
                            <div className="pt-0 p-3">
                                <div tag="h5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</div>
                                <div tag="h6" className="mb-2 mt-2 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-6">
                        <div className="bg-white">
                            <div>
                                <Image fluid={img.newsImg.childImageSharp.fluid} width="130px" />
                            </div>
                            <div className="p-3 pt-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-4 bg-white">
                            <div>
                                <Image fluid={img.newsImg.childImageSharp.fluid} width="200px" />
                            </div>
                            <div className="p-3 pt-0">
                                <div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-4 bg-white">
                            <div>
                                <Image fluid={img.newsImg.childImageSharp.fluid} width="200px" />
                            </div>
                            <div className="p-3 pt-0">
                                <div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionStyled>
    )
}
export default News


const SectionStyled = styled(Section)`
    background-color: ${props => props.theme.color.background.light};
`
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