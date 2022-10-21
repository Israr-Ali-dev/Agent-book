import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cls } from "@utils/helpers";
import { ExclamationIcon } from "@heroicons/react/outline";

const classes = {
  base: "block w-full focus:ring-transparent focus:border-black border-gray-light placeholder-gray",
  error: "border-red text-red placeholder-red",
};

const Textarea = forwardRef(function Textarea(
  {
    className,
    id,
    name,
    placeholder,
    rows = 3,
    label,
    htmlFor,
    description,
    error,
    ...props
  },
  ref
) {
  /**
   *  Should have a better way to handle this in react prop types.
   */
  if (description && error) {
    throw Error(
      "The Input component only accepts either description or error props. Can't do both."
    );
  }

  return (
    <>
      {label && (
        <label
          className="block text-ss xl:text-sm font-semibold text-black xl:pt-2"
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}

      <div className="relative mt-1 lg:mt-0 col-span-5">
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          ref={ref}
          {...props}
          className={cls(classes.base, error && classes.error, className)}
        />

        {description && (
          <p className="mt-1.25 text-xs lg:text-ss text-gray-dark">
            <span>{description}</span>
          </p>
        )}

        {error && (
          <p className="flex mt-1.25 text-xs lg:text-ss text-red">
            <ExclamationIcon className="h-5 w-5" aria-hidden="true" />
            <span className="ml-1">{error}</span>
          </p>
        )}
      </div>
    </>
  );
});

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
};

export default Textarea;
