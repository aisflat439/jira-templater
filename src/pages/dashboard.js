import React, { useEffect } from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Profile from "../components/profile"
import RouteBase from "../components/route-base"
import RouteAdd from "../components/route-add"
import RouteList from "../components/route-list"
import RouteEdit from "../components/route-edit"
import RouteLogin from "../components/route-login"

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true })
    }
  })

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteList path="/dashboard/list" />
        <RouteAdd path="/dashboard/add" />
        <RouteEdit path="/dashboard/edit" />
        <RouteBase path="/dashboard/base" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  )
}

export default Dashboard
