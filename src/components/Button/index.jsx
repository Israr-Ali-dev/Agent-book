import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cls } from "@utils/helpers";

const classes = {
  base: "relative inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-300 font-semibold",
  variant: {
    main: "bg-primary text-white border-transparent border-2 hover:bg-primary-dark uppercase tracking-wider",
    white:
      "border-2 border-primary text-primary hover:text-primary-dark hover:border-primary-dark",
    black: "bg-black text-white tracking-wider",
    table: "border-black border-2",
  },
  size: {
    small: "px-2.5 lg:px-3.75 lg:py-0.5 text-xs lg:text-sm",
    normal: "px-5 py-1.25 px-7.5 py-1.5 text-ss lg:text-sm",
    large:
      "px-7.5 py-2 lg:px-10 lg:py-2.5 xl:px-12.5 xl:py-3 text-sm lg:text-base",
    table: "px-2 py-0.5 lg:px-5 lg:py-1.5 text-xs lg:text-ss",
  },
  round: {
    none: "rounded-none",
    small: "rounded-sm",
    normal: "rounded",
    large: "rounded-lg",
    full: "rounded-full",
  },
  disabled: {
    [true]: "opacity-50 cursor-not-allowed",
    [false]: "",
  },
};

const LoadingSvg = ({ loading }) => {
  return (
    <svg
      className={cls(
        "animate-spin -ml-1 mr-3 h-5 w-5 text-white absolute left-3 invisible",
        loading && "visible"
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

const Button = forwardRef(function Button(
  {
    type = "button",
    className,
    children,
    variant = "primary",
    size = "normal",
    round = "normal",
    disabled = false,
    loading = false,
    ...props
  },
  ref
) {
  return (
    <button
      type={type}
      className={cls(
        classes.base,
        classes.size[size],
        classes.variant[variant],
        classes.round[round],
        classes.disabled[disabled],
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {<LoadingSvg loading={loading} />}
      {children}
    </button>
  );
});

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["main", "white", "black", "table"]).isRequired,
  size: PropTypes.oneOf(["small", "normal", "large", "table"]).isRequired,
  round: PropTypes.oneOf(["small", "normal", "large"]).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
