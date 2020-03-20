import PropTypes from "prop-types"
import React from "react"

import Link from "./Link"
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: "#333",
    padding: '1rem',
  }
}))


const Profile = () => {
  const classes = useStyles()

  return (
    <Box component="nav" className={classes.root}>
      <Link to="/dashboard/list" className={classes.link}>List</Link>
      <Link to="/dashboard/add" className={classes.link}>Add</Link>
      <Link to="/dashboard/edit" className={classes.link}>Edit</Link>
      <Link to="/dashboard/base" className={classes.link}>Profile</Link>
    </Box>
  )
}

Profile.propTypes = {
  siteTitle: PropTypes.string,
}

Profile.defaultProps = {
  siteTitle: ``,
}

export default Profile
