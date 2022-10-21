import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "@hookform/error-message";
import { cls } from "@utils/helpers";
import { ExclamationIcon } from "@heroicons/react/outline";

const classes = {
  base: "block w-full py-2 xl:py-3 focus:ring-transparent focus:border-black border-gray-light placeholder-gray",
  leadingIcon: "pl-10",
  error: "border-red placeholder-red focus:border-red",
};

const Input = forwardRef(function Input(
  {
    type,
    className,
    leadingIcon,
    leadingIconComponent,
    id,
    name,
    autoComplete,
    placeholder,
    label,
    htmlFor,
    description,
    errors,
    ...props
  },
  ref
) {
  /**
   *  Should have a better way to handle this in react prop types.
   */
  if (description && errors) {
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
        {leadingIcon && leadingIconComponent()}
        <input
          type={type}
          className={cls(
            classes.base,
            errors?.[name] && classes.error,
            leadingIcon && classes.leadingIcon,
            className
          )}
          id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {description && (
          <p className="mt-1.25 text-xs lg:text-ss text-gray-dark">
            <span>{description}</span>
          </p>
        )}
        {errors && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p
                  key={type}
                  className="flex items-center mt-1.25 text-xs lg:text-ss text-red"
                >
                  <ExclamationIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="ml-1">{message}</span>
                </p>
              ))
            }
          />
        )}
      </div>
    </>
  );
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  description: PropTypes.string,
  errors: PropTypes.object,
};

export default Input;
