import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MyButton } from "../../components/my-button/MyButton";

export default {
  title: "NES UI/Button/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  label: "Regular",
  type: "regular",
};

export const ZeldaGreen = Template.bind({});
ZeldaGreen.args = {
  label: "Zelda Green",
  type: "zelda",
};

export const Magenta = Template.bind({});
Magenta.args = {
  label: "Magenta",
  type: "magenta",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "small button",
  type: "regular",
  onClick: () => console.log("Hi Stranger!"),
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "LARGE BUTTON",
  type: "regular",
  onClick: () => console.log("Hi Stranger!"),
};

