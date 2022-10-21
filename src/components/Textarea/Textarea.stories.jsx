import React from "react";
import Textarea from "./index.jsx";

export default {
  title: "Plain/Textarea",
  component: Textarea,
  argTypes: {
    id: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    htmlFor: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    rows: {
      control: { type: "number" },
    },
    /*
     *  hide it to prevent conflict with description
     */
    // error: {
    //     control: { type: "text" },
    // },
    className: {
      control: { type: "text" },
    },
  },
  args: {
    label: "Venue Name",
    htmlFor: "venue-name",
    id: "venue-name",
    name: "venue-name",
    placeholder: "Your Venue Name",
    rows: 3,
  },
};

/**
 *  Demo
 */
const Template = (args) => <Textarea {...args} />;
export const Demo = Template.bind({});

/**
 *  Label On the Left
 */
const LabelOnLeft = (args) => {
  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Textarea {...args} />
    </div>
  );
};
export const _LabelOnLeft = LabelOnLeft.bind({});
_LabelOnLeft.args = {
  ...Demo.args,
  htmlFor: "Label on the Left",
  id: "Label on the Left",
};
_LabelOnLeft.storyName = "Label on the Left";

/**
 *  With help text
 */
const WithHelpText = (args) => {
  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Textarea {...args} />
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

/**
 *  With validation error
 */
const ValidationError = (args) => {
  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Textarea {...args} />
    </div>
  );
};
export const _ValidationError = ValidationError.bind({});
_ValidationError.args = {
  ...Demo.args,
  htmlFor: "Validation Error",
  id: "Validation Error",
  error: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
_ValidationError.storyName = "Validation Error";
