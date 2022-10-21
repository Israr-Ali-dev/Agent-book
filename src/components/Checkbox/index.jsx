import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cls } from "@utils/helpers";

const classes = {
  base: "w-5 h-5 border-gray text-primary focus:border-black focus:ring focus:ring-offset-0 focus:ring-transparent cursor-pointer",
  error: "border-red text-red placeholder-red",
};

const Checkbox = forwardRef(function Checkbox(
  { className, label, id, name, description, checked, ...props },
  ref
) {
  return (
    <div className="mt-1 lg:mt-0 col-span-5">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={cls(classes.base, className)}
          defaultChecked={checked}
          id={id}
          name={name}
          ref={ref}
          {...props}
        />
        <span className="text-sm md:text-base ml-2.5">{label}</span>
      </label>
      {description && (
        <p className="text-xs lg:text-ss text-gray-dark">
          <span className="">{description}</span>
        </p>
      )}
    </div>
  );
});

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  checked: PropTypes.bool,
};

export default Checkbox;
