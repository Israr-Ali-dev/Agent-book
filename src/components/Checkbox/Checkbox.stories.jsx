import React from "react";
import Checkbox from "./index.jsx";

export default {
  title: "Plain/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    checked: {
      options: [true, false],
      control: { type: "inline-radio" },
    },
  },
  args: {
    label: "Venue Name",
    id: "venue-name",
    name: "venue-name",
    checked: false,
  },
};

/**
 *  Demo
 */
const Template = (args) => <Checkbox {...args} />;
export const Demo = Template.bind({});

/**
 *  Text On the Left
 */
const TextlOnLeft = (args) => {
  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <span className="block text-sm font-semibold">Venue Title</span>
      <Checkbox {...args} />
    </div>
  );
};
export const _TextlOnLeft = TextlOnLeft.bind({});
_TextlOnLeft.args = {
  ...Demo.args,
  htmlFor: "Label on the Left",
  id: "Label on the Left",
};
_TextlOnLeft.storyName = "Text on the Left";

/**
 *  With help text
 */
const WithHelpText = (args) => {
  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <span className="block text-sm font-semibold">Venue Title</span>
      <Checkbox {...args} />
    </div>
  );
};
export const _WithHelpText = WithHelpText.bind({});
_WithHelpText.args = {
  ...Demo.args,
  htmlFor: "With Help Text",
  id: "With Help Text",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
_WithHelpText.storyName = "With Help Text";
