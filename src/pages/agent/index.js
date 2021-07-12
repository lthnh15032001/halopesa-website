import React from "react"
import Intro from '../../views/agentSections/intro'
import Header from '../../views/agentSections/header'
import SEO from '../../components/common/layout/seo'
import Layout from '../../components/common/layout/layout'
const IndexPage = () => (
  <Layout>
    <SEO title="For Agent" />
    <Header />
    <Intro />
  </Layout>
)

export default IndexPage
