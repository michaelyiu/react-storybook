import React from "react";
import PropTypes from "prop-types";
import "./RogersButton.css";

import { TribalScaleButton } from "../../../TribalScale/molecules/Button/TribalScaleButton";

export const RogersButton = ({
  primary,
  backgroundColor,
  borderColor,
  color,
  size,
  label,
  disabled,
  ...props
}) => {
  return (
    <TribalScaleButton
      primary={primary}
      // style={{ color: "white" }}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      size={size}
      label={label}
      disabled={disabled}
      {...props}
    />
  );
};

RogersButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

RogersButton.defaultProps = {
  backgroundColor: "red",
  borderColor: "red",
  color: "white",
  disabled: false,
  primary: false,
  size: "medium",
  onClick: undefined,
};
