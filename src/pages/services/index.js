import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"
import Header from "../../views/servicesSections//header"
import AllServices from "../../views/servicesSections/allservices"
const IndexPage = () => (
    <Layout>
        <SEO title="Services" />
        <Header />
        <AllServices />
    </Layout>
)

export default IndexPage
