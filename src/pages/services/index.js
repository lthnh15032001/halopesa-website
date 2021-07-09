import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"
import Header from "./section/header"
import AllServices from "./section/allservices"
const IndexPage = () => (
    <Layout>
        <SEO title="Services" />
        <Header />
        <AllServices />
    </Layout>
)

export default IndexPage
