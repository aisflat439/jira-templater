import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Dashboard = () => (
  <Layout>
    <h1>Dashboard</h1>
    <Link to="/dashboard/">Go to dashboard</Link>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Dashboard
