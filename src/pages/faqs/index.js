import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"
import Header from "../../views/FAQS/header"
import FAQ from "../../views/FAQS/faq"
const IndexPage = () => (
  <Layout>
    <SEO title="FAQS" />
    <Header />
    <FAQ />
  </Layout>
)

export default IndexPage
