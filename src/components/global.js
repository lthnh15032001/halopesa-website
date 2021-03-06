import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 20px 0;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 20px 0;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    padding:40px 0;
  }
  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 80px 0;
  }

  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};


  ${props =>
    props.accent &&
    `background-color: ${props.accent === "secondary"
      ? props.theme.color.white.dark
      : props.theme.color.primary
    }`};
`
