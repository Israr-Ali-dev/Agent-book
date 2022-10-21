import React from "react";

export default {
  title: "Plain/RadioButton",
  argTypes: {
    children: {
      control: { type: "text" },
    },
    checked: {
      options: [true, false],
      control: { type: "inline-radio" },
    },
  },
  args: {
    children: "Option Detail",
    checked: false,
  },
};

/*
 *	RadioButton
 */
const RadioButtonTemplate = (args) => {
  return (
    <p>TODO</p>
    // <label className='inline-flex items-center cursor-pointer'>
    // 	<input
    // 		type='checkbox'
    // 		className='w-20 h-20 rounded border-gray text-primary shadow-sm focus:border-gray focus:ring focus:ring-offset-0 focus:ring-gray focus:ring-opacity-50 cursor-pointer'
    // 		defaultChecked={args.checked}
    // 	/>
    // 	<span className='ml-10'>{args.children}</span>
    // </label>
  );
};

export const _RadioButtonTemplate = RadioButtonTemplate.bind({});

_RadioButtonTemplate.args = {
  ...RadioButtonTemplate.args,
};
_RadioButtonTemplate.storyName = "TODO";
