import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cls } from "@utils/helpers";

const classes = {
  base: "inline-flex items-center px-3 py-0.5 md:px-3.75 md:py-1.15 rounded-md text-xs border border-black text-black",
};

const Badge = forwardRef(function Badge(
  { className, children, ...props },
  ref
) {
  return (
    <span className={cls(classes.base, className)} ref={ref} {...props}>
      {children}
    </span>
  );
});

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Badge;
