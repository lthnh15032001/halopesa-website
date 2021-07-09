import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"
import Header from "./section/header"
import BecomePartner from "./section/becomePartner"
const IndexPage = () => (
  <Layout>
    <SEO title="For Corporation" />
    <Header />
    <BecomePartner />
  </Layout>
)

export default IndexPage
