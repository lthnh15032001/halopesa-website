import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import "../../../static/Roboto/font.css"

const ContainerCommon = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

ContainerCommon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerCommon
