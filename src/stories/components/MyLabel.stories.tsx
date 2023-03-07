import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/my-label/MyLabel";

export default {
  title: "NES UI/Etiquetas/MyLabel",
  component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "My Label",
  mode: "primary",
  size: "normal",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Label",
  mode: "secondary",
  size: "normal",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: "Terciary Label",
  mode: "terciary",
  size: "normal",
};
