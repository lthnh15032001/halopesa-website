import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

import Header from "../views/homeSections/header"
import About from "../views/homeSections/about"
import Services from "../views/homeSections/services"
import Corporation from "../views/homeSections/corporation"
import Agent from "../views/homeSections/agent"
import News from "../views/homeSections/news"
// const GetAllBlog  =  require("../hooks/use-site-metadata");
const IndexPage = () => {
  // console.log({ site: GetAllBlog() })
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <About />
      <Services />
      <Corporation />
      <Agent />
      <News />
    </Layout>
  )
}

export default IndexPage
