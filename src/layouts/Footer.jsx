import { useState, Fragment } from 'react';
import Link from 'next/link';
import Dribble from '@assets/icons/social/Dribbble.svg';
import Instagram from '@assets/icons/social/Instagram.svg';
import Twitter from '@assets/icons/social/Twitter.svg';
import Youtube from '@assets/icons/social/Youtube.svg';
import Logo from '@assets/icons/logos/logo.svg';
import Image from 'next/image';
import Hiring from '@assets/images/hiring.png';
const Footer = ({ children }) => {
  return (
    <>
      <footer className='bg-[#000518] text-white pt-12 pb-8 px-4 my-5'>
        <div className='container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4 gap-4 lg:gap-32'>
          <div className='flex w-full lg:w-1/4 flex-col space-y-5'>
            <h2 className='mr-2 lg: text-2xl font-serif font-bold'>
              <Logo />
            </h2>
            <div className='text-sm text-gray-lightest font-poppoins'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              aspernatur nisi cumque modi eligendi voluptate.
            </div>
            <div className='flex flex-row gap-5'>
              <a href='#'>
                <Instagram />
              </a>
              <a href='#'>
                <Dribble />
              </a>
              <a href='#'>
                <Twitter />
              </a>
              <a href='#'>
                <Youtube />
              </a>
            </div>
          </div>
          <div className='w-full md:w-3/4 block sm:flex text-sm mt-6 lg:mt-0'>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full'>
              <li className='inline-block py-2 px-3 text-white font-semibold text-xl tracking-wide mb-4'>
                Company
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5  text-gray-lightest hover:text-white no-underline font-poppoins'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-NanumPen'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins flex gap-2'>
                  Career <Image src={Hiring} />
                </a>
              </li>
            </ul>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full'>
              <li className='inline-block py-2 px-3 text-white  font-semibold text-xl tracking-wide mb-4'>
                Agentbook
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  Search for agent
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  Search for sale
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  FAQ
                </a>
              </li>
            </ul>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full'>
              <li className='inline-block py-2 px-3 text-white  font-semibold text-xl tracking-wide mb-4'>
                Resources
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  Articals
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  Guides
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline font-poppoins'>
                  Real Esate News
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto pt-4 mt-8 border-t border-gray-light flex flex-col gap-5 md:flex-row justify-between items-center font-poppoins'>
          <div className='text-gray-lightest'>
            {' '}
            2022 Agentbook All Rights Reserved
          </div>
          <div>
            <ul className='list-none p-0 font-thin flex flex-row text-left w-full'>
              <li>
                <a
                  href='#'
                  className='inline-block text-sm py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline'>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block text-sm py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='inline-block text-sm py-2 pl-3 pr-5 text-gray-lightest hover:text-white no-underline text-right'>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
