import React from "react";

import { RogersButton } from "./RogersButton";

export default {
  title: "Rogers/molecules/Button",
  component: RogersButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RogersButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  color: "white",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
};
