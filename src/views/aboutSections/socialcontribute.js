import React from 'react'
import { Container, Section } from "../../components/global"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import { Image } from '../../components/common/image'
import { TitleRes } from '../../components/TitleRes'
const SocialContribute = () => {
  const img = useStaticQuery(graphql`
    query {
        imgsocial1: file(sourceInstanceName: { eq: "product" }, name: { eq: "imgsocial1" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      imgsocial2: file(sourceInstanceName: { eq: "product" }, name: { eq: "imgsocial2" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionStyled>
        <Container>
          <TitleRes
            name="Social Contributions"
            des="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

          />
          <Flex col={2} gap="20px" className="mt-5 mb-md-5">
            <div>
              <Image display smWidth="340px" fluid={img.imgsocial1.childImageSharp.fluid} />
            </div>
            <div>
              <Image display smWidth="340px" fluid={img.imgsocial2.childImageSharp.fluid} />
            </div>
          </Flex>
          <div className="w-100 text-center d-flex justify-content-center align-items-center">
            <div className="text-center des" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
          </div>
        </Container>
      </SectionStyled>
    </>
  )
}
export default SocialContribute

const SectionStyled = styled(Section)`
    background-color: ${props => props.theme.color.background.light};
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-column-gap: ${props => props.gap ? props.gap : "30px"};
    justify-content: start;

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
        .des {
            width: 100%;
            font-size: 16px;
            font-weight: normal;
            color: #7A7A7A;
        }
    }
`