import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"
import Header from "../../views/corporationSections/header"
import BecomePartner from "../../views/corporationSections/becomePartner"
const IndexPage = () => (
  <Layout>
    <SEO title="For Corporation" />
    <Header />
    <BecomePartner />
  </Layout>
)

export default IndexPage
