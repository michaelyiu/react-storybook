import React from "react";
// import PropTypes from "prop-types";
import { Text } from "../../atoms/Text/Text";
import { TextInput } from "../../molecules/TextInput/TextInput";
import { TribalScaleButton } from "../../molecules/Button/TribalScaleButton";
import "./Form.css";

export const Form = () => {
  return (
    <form className={["form--default"].join(" ")} style={{}}>
      <Text>Name</Text>
      <TextInput></TextInput>
      <Text>Email</Text>
      <TextInput></TextInput>
      <TribalScaleButton label="Submit" />
    </form>
  );
};

Form.propTypes = {};
