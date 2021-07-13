import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"

import Header from "../../views/newsSections/header"
import Promotion from "../../views/newsSections/promotion"
import News from "../../views/newsSections/news"

const IndexPage = () => (
  <Layout>
    <SEO title="News and promotions" />
    <Header />
    <Promotion />
    <News />
  </Layout>
)

export default IndexPage
