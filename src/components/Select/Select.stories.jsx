import React, { useState } from "react";
import Select from "./index.jsx";

export default {
  title: "Plain/Select",
  component: Select,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
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
    options: {
      control: { type: "array" },
    },
    selected: {
      control: { type: "object" },
    },
    setSelected: {
      control: { type: "function" },
    },
  },
  args: {
    label: "Venue Name",
  },
};

const colorOptions = [
  { id: 1, name: "Orange", className: "bg-orange" },
  { id: 2, name: "Blue", className: "bg-blue" },
  { id: 3, name: "Purple", className: "bg-purple" },
];

const plainOptions = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Content Creator" },
  { id: 3, name: "Guest" },
];

/**
 *  Demo
 */
const Template = (args) => {
  const [selected, setSelected] = useState(plainOptions[1]);

  return (
    <Select
      {...args}
      options={plainOptions}
      selected={selected}
      setSelected={setSelected}
    />
  );
};
export const Demo = Template.bind({});

/**
 *  Label On the Left
 */
const LabelOnLeft = (args) => {
  const [selected, setSelected] = useState(plainOptions[1]);

  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Select
        {...args}
        options={plainOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
export const _LabelOnLeft = LabelOnLeft.bind({});
_LabelOnLeft.args = {
  ...Demo.args,
};
_LabelOnLeft.storyName = "Label on the Left";

/**
 *  With help text
 */
const WithHelpText = (args) => {
  const [selected, setSelected] = useState(plainOptions[1]);

  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Select
        {...args}
        options={plainOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
export const _WithHelpText = WithHelpText.bind({});
_WithHelpText.args = {
  ...Demo.args,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
_WithHelpText.storyName = "With Help Text";

/**
 *  With validation error
 */
const ValidationError = (args) => {
  const [selected, setSelected] = useState(plainOptions[1]);

  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Select
        {...args}
        options={plainOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
export const _ValidationError = ValidationError.bind({});
_ValidationError.args = {
  ...Demo.args,
  error: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
_ValidationError.storyName = "Validation Error";

/**
 *  With leading color icpn
 */
const LeadingColor = (args) => {
  const [selected, setSelected] = useState(colorOptions[1]);

  return (
    <div className="lg:grid lg:grid-cols-6 gap-4 items-start">
      <Select
        {...args}
        options={colorOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
export const _LeadingColor = LeadingColor.bind({});
_LeadingColor.args = {
  ...Demo.args,
};
_LeadingColor.storyName = "Leading Color";
