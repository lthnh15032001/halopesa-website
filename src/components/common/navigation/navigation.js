import React, { Component } from "react"
// import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
// import { imageStatic } from "../../../images"
import { Link } from "gatsby"
import { Container } from "../../global"
import { LogoHalopesa } from './LogoHalopesa'
import {
  Nav,
  NavItem,
  // Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  // ActionsContainer,
  TopBanner
} from "./style"

const NAV_ITEMS = [
  { name: "Services", link: "/services" },
  { name: "For Corporation", link: "/corporation" },
  { name: "For Agent", link: "/agent" },
  { name: "News and promotions", link: "/news" },
  { name: "About", link: "/about" }
]

export default class Navigation extends Component {

  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
    active: ""
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.location && this.setState({ active: window.location.pathname })
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <Link to={`${item.link.toLowerCase()}`} onClick={this.closeMobileMenu} style={{ color: this.state.active === item.link ? "#FF6E2C" : "black" }}>
      {item.name}
    </Link>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.name.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem, i) => (
          <NavItem last={i === NAV_ITEMS.length - 1 ? true : false} >{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <>
        <div style={{ background: "#F26522", width: "100%" }}>
          <TopBanner>
            <div className="contain-top">
              <div className="hotline">Hotline: 0123 456 789</div>
              <div className="i8n">English</div>
            </div>
          </TopBanner>
        </div>
        <Nav {...this.props} scrolled={this.state.hasScrolled} className={`${this.state.hasScrolled ? 'shadow' : 'shadow-sm'}`}>
          <StyledContainer>
            <LogoHalopesa />
            <Mobile>
              <button
                onClick={this.toggleMobileMenu}
                style={{ color: "black", background: "none" }}
              >
                {this.state.mobileMenuOpen ? (
                  <X size={24} alt="close menu" />
                ) : (
                  <Menu size={24} alt="open menu" />
                )}
              </button>
            </Mobile>
            <Mobile hide>{this.getNavList({})}</Mobile>

            {/* <ActionsContainer>
              <button>Sign up</button>
            </ActionsContainer> */}
          </StyledContainer>
          <Mobile>
            {mobileMenuOpen && (
              <MobileMenu>
                <Container>{this.getNavList({ mobile: true })}</Container>
              </MobileMenu>
            )}
          </Mobile>
        </Nav>
      </>
    )
  }
}
