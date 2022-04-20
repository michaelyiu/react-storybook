import React from "react";
import PropTypes from "prop-types";
import "./TribalScaleButton.css";

export const TribalScaleButton = ({
  primary,
  backgroundColor,
  borderColor,
  color,
  size,
  style,
  label,
  disabled,
  ...props
}) => {
  const mode = primary
    ? "tribalscale-button--primary"
    : "tribalscale-button--media";

  const componentStyles = {
    ...style,
    backgroundColor,
    borderColor,
    color,
  };

  return (
    <button
      type="button"
      className={[
        "tribalscale-button",
        `tribalscale-button--${size}`,
        mode,
        disabled && "tribalscale-button--disabled",
      ].join(" ")}
      style={componentStyles}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

TribalScaleButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

TribalScaleButton.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  disabled: false,
  primary: false,
  size: "medium",
  onClick: undefined,
};
