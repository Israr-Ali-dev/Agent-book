import React, { useState, Fragment } from "react";
import Link from "next/link";
import Flag from "@assets/images/countries/canada.png";
import Logo from "@assets/icons/logos/logo.svg";
import AgentImage2 from "@assets/agents/agent2.png";
import { Menu, Transition } from "@headlessui/react";
import {
  UserIcon,
  LogoutIcon,
  MenuIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

const Navbar = ({ children }) => {
  const dropDownMenu = () => {
    return (
      <>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm font-medium text-gray-700 shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2l focus:ring-offset-gray-100">
              <MenuIcon
                className=" mr-4 h-7 w-7 text-white"
                aria-hidden="true"
              />
              <div className="border-2 rounded-[100%] border-solid border-white h-7">
                <Image
                  src={AgentImage2}
                  width="25"
                  height="25"
                  objectFit="contain"
                />
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="my-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={
                        "text-black hover:text-primary hover:font-semibold px-4 py-2 text-sm flex items-center "
                      }
                    >
                      <UserIcon className=" mr-4 h-5 w-5" aria-hidden="true" />
                      My Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={
                        "text-black hover:text-primary hover:font-semibold px-4 py-2 text-sm flex items-center "
                      }
                    >
                      <LockClosedIcon
                        className=" mr-4 h-5 w-5"
                        aria-hidden="true"
                      />
                      Change Password
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={
                        "text-[#F2765D] hover:text-white hover:bg-[#F2765D] hover:font-semibold px-4 py-2 text-sm flex items-center "
                      }
                    >
                      <LogoutIcon
                        className=" mr-4 h-5 w-5"
                        aria-hidden="true"
                      />
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </>
    );
  };

  return (
    <>
      <nav className="relative z-20 flex flex-wrap items-center justify-between w-full py-5 px-5 md:px-20 text-lg text-gray-700 bg-transparent">
        <div>
          <a href="#">
            <Logo />
          </a>
        </div>

        <div className="flex items-center sm:w-auto w-full justify-end ">
          <ul className="pt-4 text-base text-gray-700 flex justify-between space-x-4 ">
            <li>
              <a
                className="py-2.5 px-3 mt-2.5 block rounded border border-white"
                href="#"
              >
                <Image src={Flag} />
              </a>
            </li>

            <li>
              <a className=" py-2.5 block" href="#">
                {dropDownMenu()}
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
