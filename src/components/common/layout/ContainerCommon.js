import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import Localize from '../../../localization/locales';
import { getCurrentLocale } from "../../../utils/localize"

const ContainerCommon = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Localize lng={getCurrentLocale()}>
      <GlobalStyles />
      {children}
    </Localize>
  </ThemeProvider>
)

ContainerCommon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerCommon
