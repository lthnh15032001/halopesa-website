import React, { Component } from "react"
// import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import { LinkGatsby } from "./style"
import { Container } from "../../global"
import { LogoHalopesa } from './LogoHalopesa'
import {
  Nav,
  NavItem,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  TopBanner
} from "./style"
import Language from './Language'
const NAV_ITEMS = [
  { name: "Halopesa For You", link: "/services" },
  { name: "For Corporation", link: "/corporation" },
  { name: "For Agent", link: "/agent" },
  { name: "News and promotions", link: "/news" },
  { name: "About", link: "/about" }
]

export default class Navigation extends Component {
  _isMounted = false;
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
    active: ""
  }

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener("scroll", this.handleScroll)
    window.location && this.setState({ active: window.location.pathname })
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 10) {
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
    <LinkGatsby to={`${item.link.toLowerCase()}`} onClick={this.closeMobileMenu} style={{ color: this.state.active === item.link ? "#FF6E2C" : "black" }}>
      {item.name}
    </LinkGatsby>
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
          <NavItem key={i.toString()} last={i === NAV_ITEMS.length - 1 ? true : false} >{this.getNavAnchorLink(navItem)}</NavItem>
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
              <div className="hotline">Hotline: <a href="tel:+255622670160" className="text-white"> +255 622 670 160</a> </div>
              <div className="i8n">
                {/* <Language /> */}
              </div>
            </div>
          </TopBanner>
        </div>
        <Nav {...this.props} scrolled={this.state.hasScrolled} className={`${this.state.hasScrolled ? 'shadow' : ''} ${mobileMenuOpen ? "bg-white" : "bg-light"}`}>
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
