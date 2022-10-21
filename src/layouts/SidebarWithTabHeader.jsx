import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { cls, isEqualFirstPathOnly } from "@utils/helpers";
import { mobileNavigation } from "@utils/navigations";
import LogoRound from "@assets/icons/logos/logo-round.svg";

const SidebarWithTabHeader = ({ children }) => {
  const [sidebarNarrow, setSidebarNarrow] = useState(true);

  const router = useRouter();

  const selectedNavigation = mobileNavigation.find((navigation) =>
    isEqualFirstPathOnly(router, navigation.href)
  );
  const selectedNavigationChildren = selectedNavigation?.children;

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white border-b border-gray-lightest md:border-gray-light z-10 shadow-light md:shadow-none"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-15 md:h-18 xl:h-20">
                <div className="flex justify-between w-full">
                  <div
                    className="flex-shrink-0 flex items-center"
                    onClick={() => setSidebarNarrow(!sidebarNarrow)}
                  >
                    <div
                      className={cls(
                        "rounded-full p-1 lg:p-2",
                        selectedNavigation.iconStyle
                      )}
                    >
                      <selectedNavigation.icon
                        className="h-5 w-5 xl:h-6 xl:w-6 fill-current text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h1 className="ml-2.5">{selectedNavigation?.name}</h1>
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    {selectedNavigationChildren?.map((item) => {
                      return (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={cls(
                              item.href === router.asPath
                                ? "border-primary text-black"
                                : "border-transparent text-gray-dark hover:border-primary hover:text-primary transition-all duration-300",
                              "inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium"
                            )}
                          >
                            <span className="font-semibold">{item.name}</span>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* <Disclosure.Panel className="sm:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                {tabs.map((item) => {
                                    return (
                                        <Link key={item.name} href={item.href}>
                                            <a
                                                className={cls(
                                                    item.href === router.asPath
                                                        ? "bg-indigo-50 border-primary text-primary"
                                                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700",
                                                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                                )}
                                            >
                                                <span className="font-semibold">{item.name}</span>
                                            </a>
                                        </Link>
                                    );
                                })}
                            </div>
                        </Disclosure.Panel> */}
          </>
        )}
      </Disclosure>

      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <div className="bg-white md:bg-gray-lightest pt-7 py-25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default SidebarWithTabHeader;
