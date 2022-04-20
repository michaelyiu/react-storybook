import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

export const Text = ({ primary, color, size, children, ...props }) => {
  const textColor = color && { color };
  return (
    <p
      className={["text--primary"].join(" ")}
      style={{ ...textColor }}
      {...props}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  primary: false,
  children: "Click me",
  color: null,
  size: "10",
};
