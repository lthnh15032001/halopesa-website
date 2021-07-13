import React from "react"
import Intro from '../../views/agentSections/intro'
import Header from '../../views/agentSections/header'
import Benefit from '../../views/agentSections/benefit'
import Testimotional from '../../views/agentSections/testimotional'
import SEO from '../../components/common/layout/seo'
import Layout from '../../components/common/layout/layout'
const IndexPage = () => (
  <Layout>
    <SEO title="For Agent" />
    <Header />
    <Intro />
    <Benefit />
    <Testimotional />
  </Layout>
)

export default IndexPage
