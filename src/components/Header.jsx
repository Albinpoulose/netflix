import React from 'react'
import PropTypes from 'prop-types'
import NetflixLogo from "../resources/svg/netflix_logo";

function Header(props) {
  return (
    <div  >
      <NetflixLogo />
    </div>
  );
}

Header.propTypes = {}

export default Header
