import { TribalScaleButton } from "./TribalScaleButton";

export default {
  title: "TribalScale/molecules/Button",
  component: TribalScaleButton,
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

const Template = (args) => <TribalScaleButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button1",
};

export const Media = Template.bind({});

Media.args = {
  label: "Button2",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button3",
  disabled: true,
};
