import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

import Header from "../views/sections/header"
import About from "../views/sections/about"
import Services from "../views/sections/services"
import Corporation from "../views/sections/corporation"
import Agent from "../views/sections/agent"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Services />
    <Corporation />
    <Agent />
  </Layout>
)

export default IndexPage
