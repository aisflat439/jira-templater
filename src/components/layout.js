/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Link from "./Link"

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { createMuiTheme } from '@material-ui/core/styles';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (


    <ThemeProvider theme={createMuiTheme(theme)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1600,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}
          <Link to="/dashboard/">Go to dashboard</Link>
          <br />
          <Link to="/page-2/">Go to page 2</Link>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
