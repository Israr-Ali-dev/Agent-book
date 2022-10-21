import React from "react";
import VIPIcon from "@assets/icons/buttons/vip.svg";
import Badge from "./index";

export default {
  title: "Components/Badge",
  component: Badge,
  /**
   *  You can use different background color on storybook if needed
   */
  // parameters: {
  //     backgrounds: {
  //         default: "twitter",
  //         values: [
  //             { name: "twitter", value: "#00aced" },
  //             { name: "facebook", value: "#3b5998" },
  //         ],
  //     },
  // },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
  },
  args: {
    children: "Badge",
  },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});

// Default.parameters = {
//     backgrounds: { default: "facebook" },
// };

/*
 *	Plain Badge
 */
export const Main = Template.bind({});

Main.args = {
  ...Default.args,
  children: "Badge",
};
Main.storyName = "Badge";

/*
 *	Colorful Badge
 */
export const ColorBadge = Template.bind({});

ColorBadge.args = {
  ...Default.args,
  children: "Badge",
  className: "text-white bg-turquoise border-turquoise",
};
ColorBadge.storyName = "Colorful";

/*
 *	With Leading Icon Badge
 */
const LeadingIconBadge = (args) => {
  return (
    <Badge {...args}>
      <VIPIcon className="w-3.5 h-3.5 mr-1.25 fill-current" />
      {args.children}
    </Badge>
  );
};

export const _LeadingIconBadge = LeadingIconBadge.bind({});

_LeadingIconBadge.args = {
  ...Default.args,
  children: "Badge",
  className: "text-white bg-honey border-honey",
};
_LeadingIconBadge.storyName = "Leading Icon";
