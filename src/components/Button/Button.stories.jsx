import React from "react";
import Button from "./index";
import DownloadIcon from "@assets/icons/buttons/download.svg";
import BackIcon from "@assets/icons/buttons/back.svg";
import NextIcon from "@assets/icons/buttons/next.svg";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["submit", "button"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["main", "white", "black"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["small", "normal", "large"],
      control: { type: "inline-radio" },
    },
    round: {
      options: ["small", "normal", "large", "full"],
      control: { type: "inline-radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "inline-radio" },
    },
    children: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
  },
  args: {
    type: "button",
    children: "Button",
    variant: "main",
    size: "normal",
    round: "normal",
    disabled: false,
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

/*
 *	Main Button
 */
export const Main = Template.bind({});

Main.args = {
  ...Default.args,
  children: "Main Button",
  variant: "main",
  size: "large",
  round: "normal",
};
Main.storyName = "Main";

/* Secondary Button */
export const Secondary = Template.bind({});

Secondary.args = {
  ...Default.args,
  children: "Secondary Button",
  variant: "main",
  size: "normal",
  round: "normal",
};
Secondary.storyName = "Secondary";

/*
 *	Main with Leading Icon
 */
const MainWithLeadingIcon = (args) => {
  return (
    <Button {...args}>
      <DownloadIcon className="w-6 h-6 mr-3 fill-current text-white" />
      {args.children}
    </Button>
  );
};

export const _MainWithLeadingIcon = MainWithLeadingIcon.bind({});

_MainWithLeadingIcon.args = {
  ...Default.args,
  children: "Main Button",
  variant: "main",
  size: "large",
  round: "normal",
};
_MainWithLeadingIcon.storyName = "Main with Leading Icon";

/*
 *	Secondary with Leading Icon
 */
const SecondaryWithLeadingIcon = (args) => {
  return (
    <Button {...args}>
      <DownloadIcon className="w-4 h-4 mr-2.5 fill-current text-white" />
      {args.children}
    </Button>
  );
};

export const _SecondaryWithLeadingIcon = SecondaryWithLeadingIcon.bind({});

_SecondaryWithLeadingIcon.args = {
  ...Default.args,
  children: "Secondary Button",
  variant: "main",
  size: "normal",
  round: "normal",
};

_SecondaryWithLeadingIcon.storyName = "Secondary with Leading Icon";

/*
 *	Link Button
 */
const LinkTemplate = (args) => (
  <a href="" className="inline-flex items-center uppercase text-primary">
    {args.children}
  </a>
);

export const _LinkTemplate = LinkTemplate.bind({});

_LinkTemplate.args = {
  children: "Link Text",
};
_LinkTemplate.storyName = "Link";

/*
 *	Link with Leading Icon
 */
const LinkWithLeadingIconTemplate = (args) => (
  <a href="#" className="inline-flex items-center uppercase text-primary">
    <BackIcon className="w-4.5 h-4.5 mr-3 fill-current text-primary" />
    {args.children}
  </a>
);

export const _LinkWithLeadingIconTemplate = LinkWithLeadingIconTemplate.bind(
  {}
);

_LinkWithLeadingIconTemplate.args = {
  children: "Link Text",
};
_LinkWithLeadingIconTemplate.storyName = "Link with Leading Icon";

/*
 *	Link with Trailing Icon
 */
const LinkWithTrailingIconTemplate = (args) => (
  <a href="#" className="inline-flex items-center uppercase text-primary">
    {args.children}
    <NextIcon className="w-4.5 h-4.5 ml-3 fill-current text-primary" />
  </a>
);

export const _LinkWithTrailingIconTemplate = LinkWithTrailingIconTemplate.bind(
  {}
);

_LinkWithTrailingIconTemplate.args = {
  children: "Link Text",
};
_LinkWithTrailingIconTemplate.storyName = "Link with Trailing Icon";
