import React from 'react'
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import { Image } from '../../components/common/image'
import { TitleRes } from '../../components/TitleRes'

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
                <TitleRes
                    name="Halopesa News"
                    des="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                />
                <div className="row">
                    <div className="border-0 mt-4 col-12 col-md-6">
                        <div className="bg-white">
                            <Image display smWidth="340px" fluid={img.news.childImageSharp.fluid} width="569px" />
                            <div className="pt-0 p-3">
                                <div tag="h5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</div>
                                <div tag="h6" className="mb-2 mt-2 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-6 d-md-block d-none">
                        <div className="bg-white mb-4" style={{ height: "150px" }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <Image fluid={img.newsImg.childImageSharp.fluid} width="150px" />
                                </div>
                                <div className="p-3 pt-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-4" style={{ height: "150px" }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <Image fluid={img.newsImg.childImageSharp.fluid} width="150px" />
                                </div>
                                <div className="p-3 pt-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-4" style={{ height: "150px" }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <Image fluid={img.newsImg.childImageSharp.fluid} width="150px" />
                                </div>
                                <div className="p-3 pt-0">
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