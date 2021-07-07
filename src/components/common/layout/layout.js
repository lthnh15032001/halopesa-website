import React from "react"
import PropTypes from "prop-types"

import "../../../static/fonts/fonts.css"
import Navigation from "../navigation/navigation"
import Footer from "./footer"
import ContainerCommon from './ContainerCommon'
const Layout = ({ children }) => (
  <ContainerCommon>
    <Navigation />
    {children}
    <Footer />
  </ContainerCommon>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
