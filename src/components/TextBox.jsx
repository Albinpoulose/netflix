import React from "react";
import PropTypes from "prop-types";
import NetflixLogo from "../resources/svg/netflix_logo.jsx"

function TextBox(props) {
  return (
    <div className="text-3xl font-bold">
      <form>
        <label>
          Enter your name:
          <input type="text" />
      
        </label>
      </form>
    </div>
  );
}

TextBox.propTypes = {};

export default TextBox;
