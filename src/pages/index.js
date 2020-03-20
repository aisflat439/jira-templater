import React from "react"
import Link from "../components/Link"

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box component="main" m={3}>
      <Card>
        <h1>Hi people lorem</h1>
      </Card>
    </Box>
    <Link to="/dashboard">Go to dashboard</Link>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
