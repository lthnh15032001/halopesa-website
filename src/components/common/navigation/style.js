import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../../global"

export const TopBanner = styled(Container)`
 @media (max-width: ${props => props.theme.screen.xs}) {
  height: 50px;
  }
  margin: 0 auto;
  height: 61px;
  width: 100%;
  padding: 0 16px;
  .contain-top {
    justify-content: space-between;
    width: 100%;
    height: 100%;
    display : flex;
    align-items: center;
  }
  .hotline { 
    color: #FFFFFF;
    font-size: 16px;
  }
  .i8n { 
    color: #FFFFFF;
    font-size: 16px;
  }
`
export const LinkGatsby = styled(Link)`
 
`
export const Nav = styled.nav`
  @media (max-width: ${props => props.theme.screen.xs}) {
    top: ${props => (props.scrolled ? `0` : `50px`)};
  }

  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  position: fixed;
  width: 100%;
  top: ${props => (props.scrolled ? `0` : `61px`)};
  z-index: 1000;
  background: ${props => props.scrolled ? 'white' : props.theme.color.light};
  transition: 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
    mobile &&
    `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
 @media (min-width: ${props => props.theme.screen.sm}) and (max-width: ${props => props.theme.screen.md}) {
    font-size: 12px;
    margin: ${props => props.last ? "0 0 0em 2.25em" : "0 1.25em;"};
  }
  margin: ${props => props.last ? "0 0 0em 2.25em" : "0 2.25em;"};
  ${props => props.theme.font_size.xsmall};
  font-weight: 500;
  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.black.regular};
    text-transform: uppercase!important;
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }

  button {
    font-family: ${props => props.theme.font.normal};
    ${props => props.theme.font_size.xsmall};
    color: white;
    background: #098b8c;
    border-radius: 4px;
    padding: 10px 16px;
    text-transform: uppercase;
    font-size: 12px;
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
