import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import { Container, Section } from "../components/global"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Container className="d-flex justify-content-center align-items-center">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
