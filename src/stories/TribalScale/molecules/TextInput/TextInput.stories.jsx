import React from "react";
import { TextInput } from "./TextInput";

export default {
  title: "TribalScale/molecules/TextInput",
  component: TextInput,
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

const Template = (args) => {
  return <TextInput {...args} />;
};

export const Active = Template.bind({});

Active.args = {
  isActive: true,
};

export const Inactive = Template.bind({});

Inactive.args = {
  isActive: false,
};
