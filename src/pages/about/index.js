import React from "react"

import Layout from "../../components/common/layout/layout"
import SEO from "../../components/common/layout/seo"
import Header from "../../views/aboutSections/header"
import Text from "../../views/aboutSections/text"
import ImgDescription from "../../views/aboutSections/imgdescription"
import SocialContribute from "../../views/aboutSections/socialcontribute"
import Download from "../../views/aboutSections/download"
const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Header />
    <Text />
    <ImgDescription />
    <SocialContribute />
    <Download />
  </Layout>
)

export default IndexPage
