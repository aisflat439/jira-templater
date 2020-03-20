import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Profile from "../components/profile"
import RouteBase from "../components/route-base"
import RouteAdd from "../components/route-add"
import RouteList from "../components/route-list"

const Dashboard = () => (
  <Layout>
    <Profile />
    <Router>
      <RouteBase path="/dashboard/base" />
      <RouteList path="/dashboard/list" />
      <RouteAdd path="/dashboard/add" />
    </Router>
  </Layout>
)

export default Dashboard
