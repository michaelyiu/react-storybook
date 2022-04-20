import React from "react";

import { Text } from "./Text";

export default {
  title: "TribalScale/atoms/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Text",
};
