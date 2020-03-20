import PropTypes from "prop-types"
import React from "react"

const Profile = () => (
  <div
    style={{
      margin: `.25rem 0`,
    }}
  >
    <p style={{
      padding: `.25rem 0`
    }}>Your profile here</p>
  </div>
)

Profile.propTypes = {
  siteTitle: PropTypes.string,
}

Profile.defaultProps = {
  siteTitle: ``,
}

export default Profile
