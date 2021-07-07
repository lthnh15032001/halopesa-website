import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"

import Header from "../../views/sections/header"
import GetStarted from "../../views/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <GetStarted />
  </Layout>
)

export default IndexPage
