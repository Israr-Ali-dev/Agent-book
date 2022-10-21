import React, { Fragment, forwardRef } from "react";
import PropTypes from "prop-types";
import { cls } from "@utils/helpers";
import { ExclamationIcon } from "@heroicons/react/outline";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const classes = {
  base: "relative w-full bg-white border border-gray-light pl-3 pr-10 text-left cursor-default focus:outline-none focus:ring-transparent focus:border-black ",
  error: "border-red text-red placeholder-red",
  variant: {
    main: "py-2 xl:py-3",
    table: "py-1 xl:py-2",
  },
};

const Select = forwardRef(function Select(
  {
    className,
    options,
    variant = "main",
    selected,
    setSelected,
    label,
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
    <Listbox value={selected} onChange={setSelected} ref={ref}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block text-ss xl:text-sm text-black font-semibold xl:pt-2">
              {label}
            </Listbox.Label>
          )}
          <div className="relative mt-1 lg:mt-0 col-span-5">
            <Listbox.Button
              className={cls(
                classes.base,
                classes.variant[variant],
                error && classes.error,
                className
              )}
            >
              <div className="flex items-center gap-3">
                {selected?.className && (
                  <span
                    className={cls(
                      selected?.className,
                      "flex-shrink-0 inline-block h-5 w-5"
                    )}
                  />
                )}
                <span className="block truncate">
                  {selected?.name || "\u00A0"}
                </span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full bg-white shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {Array.isArray(options) &&
                  options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ selected, active }) =>
                        cls(
                          selected ? "bg-gray-lightest" : "bg-white",
                          active ? "text-black bg-gray-light" : "text-black",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center gap-3">
                            {option?.className && (
                              <span
                                className={cls(
                                  option?.className,
                                  "flex-shrink-0 inline-block h-5 w-5 rounded-xs"
                                )}
                                aria-hidden="true"
                              />
                            )}
                            <span
                              className={cls(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={cls(
                                active ? "text-primary" : "text-primary",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>

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
      )}
    </Listbox>
  );
});

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(["main", "table"]).isRequired,
  selected: PropTypes.object.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Select;
