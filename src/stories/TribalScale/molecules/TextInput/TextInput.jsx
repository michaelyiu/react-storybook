import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

export const TextInput = ({ isActive, onChangeText, ...props }) => {
  const mode = isActive
    ? "tribalscale-textinput--active"
    : "tribalscale-textinput--inactive";

  return (
    <input
      onChange={onChangeText}
      className={["tribalscale-textinput", mode].join(" ")}
      {...props}
    />
  );
};

TextInput.propTypes = {
  isActive: PropTypes.bool,
};

TextInput.defaultProps = {
  isActive: false,
};
