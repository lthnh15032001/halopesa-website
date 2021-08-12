import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

import Header from "../views/homeSections/header"
import About from "../views/homeSections/about"
import Services from "../views/homeSections/services"
import Corporation from "../views/homeSections/corporation"
import Agent from "../views/homeSections/agent"
import News from "../views/homeSections/news"
import HalopesaApp from "../views/homeSections/halopesaapp"
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
      <HalopesaApp />
    </Layout>
  )
}

export default IndexPage
