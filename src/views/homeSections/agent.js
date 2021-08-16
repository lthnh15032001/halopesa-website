import React from 'react'
import styled from "styled-components"
import { Container, Section } from "../../components/global"
import { graphql, useStaticQuery,navigate } from "gatsby"
import { LogoHalopesa } from '../../components/common/navigation/LogoHalopesa'
import { Button } from '../../components/Button'
import { Image } from '../../components/common/image'

import { TitleRes } from '../../components/TitleRes'
const Agent = () => {
  const agentbrief = useStaticQuery(graphql`
    query {
        agentbrief: file(sourceInstanceName: { eq: "product" }, name: { eq: "agent" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <StyledContainer>
        <TitleRes
          className="mb-3 d-md-none d-block"
          name="For Agent"
          des="As our Agents that are spread out throughout the country. HaloPesa welcomes every interested individual to join our HaloPesa Family by becoming an Agent as it is exciting and rewarding too, we welcome you to the winning team. "
        />
        <Flex className="flex-lg-row-reverse d-lg-flex">
          <div className="d-lg-block d-md-none d-none">
            <Image display smWidth="340px" fluid={agentbrief.agentbrief.childImageSharp.fluid} />
          </div>
          <div className="d-sm-flex d-md-block justify-content-center align-items-center flex-column">
            <LogoHalopesa className="d-md-flex justify-content-md-center justify-content-lg-start d-lg-flex d-none" style={{ justifyContent: "start!important" }} />
            <div className="d-md-flex d-lg-block flex-column d-none align-items-center">
              <h2>For Agent</h2>
              <div className="text-des" style={{ color: "#7A7A7A" }}>
              As our Agents that are spread out throughout the country. HaloPesa welcomes every interested individual to join our HaloPesa Family by becoming an Agent as it is exciting and rewarding too, we welcome you to the winning team. </div>
            </div>
            <Image className=" mt-0 mt-md-4 mt-lg-0 d-md-flex justify-content-center d-lg-none d-block" display smWidth="340px" fluid={agentbrief.agentbrief.childImageSharp.fluid} />
            <div className="d-flex d-md-flex d-lg-block justify-content-center align-items-center">
              <Button name="Read more" className="mt-md-4 "
               onClick={() => {
                navigate("/agent")
              }}
              
              />
            </div>
          </div>
        </Flex>
      </StyledContainer>
    </StyledSection>
  )
}
export default Agent
const StyledContainer = styled(Container)`
    
    @media (max-width: ${props => props.theme.screen.md}) {
      .text-des { 
        text-align:center
      }
      h2 {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        text-align:center;
        }
  }
`

const StyledSection = styled(Section)`
background-color: ${props => props.theme.color.background.light}
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
 
  }
  @media (min-width: ${props => props.theme.screen.md}) {
    .text { 
      width: 80%
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    .text { 
      width: 100%
    }
  }
`