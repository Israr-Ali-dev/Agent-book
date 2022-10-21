import { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import {
  HomeIcon,
  XIcon,
  ChevronDoubleLeftIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { cls, isEqualFirstPathOnly } from "@utils/helpers";
import { navigations, mobileNavigation } from "@utils/navigations";
import { signOut } from "next-auth/react";
import LogoText from "@assets/icons/logos/logo-text.svg";
import Tab from "@assets/icons/sidebars/tab.svg";
import LogoRound from "@assets/icons/logos/logo-round.svg";

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  const router = useRouter();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Static sidebar for mobile */}
      <Transition.Root show={sidebarOpenMobile} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpenMobile}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-transparent"
                    onClick={() => setSidebarOpenMobile(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <LogoText className="h-8 w-auto block" alt="LogoText" />
                </div>
                <div className="mt-5 flex-grow flex flex-col">
                  <nav
                    className="flex-1 space-y-2.5 bg-white"
                    aria-label="Sidebar"
                  >
                    {mobileNavigation.map((item) => {
                      return !item.children ? (
                        <div key={item.name}>
                          <Link href={item.href}>
                            <a
                              className={cls(
                                isEqualFirstPathOnly(router, item.href)
                                  ? "border-primary border-l-4 bg-gray-lightest text-primary"
                                  : "bg-white text-gray-dark hover:bg-gray-50 hover:text-gray-900 border-transparent",
                                "group w-full flex items-center px-3 py-2 text-sm font-semibold border-l-4"
                              )}
                              onClick={() => {
                                setSidebarOpenMobile(false);
                              }}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-primary fill-current"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </Link>
                        </div>
                      ) : (
                        <Disclosure
                          as="div"
                          key={item.name}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={cls(
                                  isEqualFirstPathOnly(router, item.href)
                                    ? "border-primary bg-gray-lightest text-primary"
                                    : "border-transparent bg-white text-gray-dark",
                                  "group w-full flex items-center px-3 pr-1 py-2 text-left text-sm font-semibold border-l-4 focus:outline-none"
                                )}
                              >
                                <item.icon
                                  className="mr-3 flex-shrink-0 h-6 w-6 text-primary fill-current"
                                  aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                                <svg
                                  className={cls(
                                    open ? "rotate-90" : "",
                                    "ml-3 flex-shrink-0 h-5 w-5 transform text-gray"
                                  )}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Disclosure.Button>

                              <Disclosure.Panel className="space-y-1">
                                {item.children.map((subItem) => (
                                  <Link href={subItem.href} key={subItem.name}>
                                    <a
                                      className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-dark"
                                      onClick={() => {
                                        setSidebarOpenMobile(false);
                                      }}
                                    >
                                      {subItem.name}
                                    </a>
                                  </Link>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div
          className={cls(
            sidebarOpen ? "w-16 xl:w-20" : "w-44 xl:w-50",
            "flex flex-col transition-all duration-400 ease-in-out"
          )}
        >
          <div className="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto overflow-x-hidden">
            <div className="h-16 flex items-center flex-shrink-0 justify-center relative">
              <div
                className={cls(sidebarOpen ? "hidden" : "flex items-center")}
              >
                <Link href="#">
                  <a className="mr-2 xl:mr-3">
                    <LogoText
                      className="h-5 xl:h-6 w-auto block"
                      alt="LogoText"
                    />
                  </a>
                </Link>

                <div className="absolute right-2 cursor-pointer p-1">
                  <ChevronDoubleLeftIcon
                    className="h-4 w-auto"
                    onClick={() => {
                      setSidebarOpen(true);
                    }}
                  />
                </div>
              </div>

              {sidebarOpen && (
                <div
                  className="p-2.5 lg:p-4 cursor-pointer"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                >
                  <Tab className="h-6 xl:h-8 w-auto" alt="Tab" />
                </div>
              )}
            </div>
            <div className="flex-grow flex flex-col">
              <nav className="flex-1 bg-white space-y-2" aria-label="Sidebar">
                {navigations.map((item) => {
                  return (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={cls(
                          isEqualFirstPathOnly(router, item.href)
                            ? "bg-white border-primary text-primary"
                            : "border-transparent text-black hover:bg-gray-lightest hover:text-gray-dark",
                          "flex items-center pl-4.5 pr-3 py-3 text-ss xl:text-sm font-medium border-l-4"
                        )}
                      >
                        <item.icon
                          className={cls(
                            isEqualFirstPathOnly(router, item.href)
                              ? "text-primary"
                              : "text-gray-dark",
                            "mr-6.25 flex-shrink-0 h-6 w-6 fill-current"
                          )}
                          aria-hidden="true"
                        />
                        <span className="font-semibold whitespace-nowrap">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  );
                })}
              </nav>

              <div className="flex justify-center items-center object-bottom">
                <span
                  className={cls(
                    sidebarOpen ? "hidden" : "block",
                    "text-sm font-semibold mr-1.25 select-none whitespace-nowrap"
                  )}
                >
                  Powered by
                </span>
                <LogoRound className="h-8 w-auto" alt="LogoRound" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="lg:hidden py-1 flex justify-between items-center bg-white shadow border-b border-gray-200">
          {/* Left: Mobile Tab Menu */}
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray hover:text-black focus:outline-none focus:bg-transparent"
            onClick={() => {
              setSidebarOpenMobile(true);
            }}
          >
            <span className="sr-only">Open sidebar</span>
            <Tab className="h-6 w-6" />
          </button>
          {/* Center: Mobile Logo */}
          <LogoText className="h-8 w-auto block" alt="LogoText" />

          {/* TODO: Right Logout Button */}
          <div
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md cursor-pointer text-gray"
            onClick={() => signOut()}
          >
            <LogoutIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
