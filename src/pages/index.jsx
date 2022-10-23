import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Input from "@components/Input";
import Button from "@components/Button";
import Banner from "@assets/images/banner1.png";
import Banner2 from "@assets/images/banner2.png";
import Banner3 from "@assets/images/banner3.png";
import Logo from "@assets/icons/logos/logo.svg";
import SeacrhIcon from "@assets/icons/searchIcon.svg";
import Search from "@assets/icons/buttons/search.svg";
import ListIcon from "@assets/icons/listIcon.svg";
import AgentImage from "@assets/agents/agent1.png";
import AgentImage2 from "@assets/agents/agent2.png";
import AgentImage3 from "@assets/agents/agent3.png";
import AgentImage4 from "@assets/agents/agent4.png";
import RatingImage from "@assets/images/rating.png";
import TagIcon from "@assets/icons/tag.svg";
import CalenderIcon from "@assets/icons/calender.svg";
import BookIcon from "@assets/icons/book.svg";
import Artical1 from "@assets/images/artical1.png";
import Artical2 from "@assets/images/artical2.png";
import Artical3 from "@assets/images/artical3.png";
import LocationSIcon from "@assets/icons/locationS.svg";
import LocationIcon from "@assets/icons/location.svg";
import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

/**
 *  Search suggestion component
 */
const SearchSuggestion = () => {
  return (
    <>
      <div className="lg:container bg-white shadow-lg rounded mx-auto border-2 z-20 p-8 my-10">
        <h1 className="text-base font-medium my-5  gap-2 flex items-center">
          <LocationSIcon /> Use my current location
        </h1>

        <div className=" w-full h-full my-15">
          <div className="text-gray-dark font-semibold uppercase text-base my-8 mx-4">
            By Name
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row w-full px-4 gap-2 border-b border-gray-300 py-5 mb-2">
              <div className="flex flex-row w-full justify-between pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-sm font-normal flex items-center gap-5">
                    <Image src={AgentImage} width="40" height="40" />
                    <div className="text-lg hover:text-primary lg:text-2xl font-medium">
                      Tim Hortons
                    </div>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm  font-normal gap-2 flex items-center">
                    <Image src={RatingImage} />
                    <div>5.0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full px-4 gap-2 border-b border-gray-300 py-5 mb-2">
              <div className="flex flex-row w-full justify-between pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-sm font-normal flex items-center gap-5">
                    <Image src={AgentImage} width="40" height="40" />
                    <div className="text-lg hover:text-primary lg:text-2xl font-medium">
                      Tim Hortons
                    </div>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm font-normal gap-2 flex items-center">
                    <Image src={RatingImage} />
                    <div>5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full my-15">
          <div className="text-gray-dark font-semibold uppercase text-base my-8 mx-4">
            By Location
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row w-full px-4 gap-2 border-b border-gray-300 py-5 mb-2">
              <div className="flex flex-row w-full justify-between pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-sm font-normal flex items-center gap-5">
                    <LocationIcon />
                    <div className="text-lg hover:text-primary lg:text-2xl font-medium">
                      Los Angles, California
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full px-4 gap-2 border-b border-gray-300 py-5 mb-2">
              <div className="flex flex-row w-full justify-between pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-sm font-normal flex items-center gap-5">
                    <LocationIcon />
                    <div className="text-lg hover:text-primary lg:text-2xl font-medium">
                      Jersey City, New Jersey
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Index = ({ csrfToken }) => {
  const [search, setSearch] = useState(null);

  return (
    <>
      {/* Header */}
      <header>
        <div className="w-full h-[593px] antialiased relative mb-20">
          <div className="absolute z-10 w-full h-full">
            <Navbar />
            <div className="flex justify-center items-center h-[86%] mx-auto">
              <div className=" flex flex-col justify-center items-center mx-auto px-5">
                <h1 className=" text-4xl sm:text-5xl md:text-[55px] font-bold text-white text-center">
                  Find The Perfect Real Estate Agent
                </h1>
                <div className="text-lg font-normal text-white max-w-3xl text-center my-4 ">
                  Make your search and sale easier and faster by connecting with
                  one of our expert local agent in your neighborhood
                </div>
                <div className="relative flex items-center w-full">
                  <div className="absolute left-8 z-10">
                    <SeacrhIcon />
                  </div>
                  <input
                    id="11"
                    type="text"
                    className="peer relative h-18 md:h-[86px] w-full rounded-md bg-gray-50 pl-20 text-lg pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <button className="absolute right-4 h-12 sm:h-15 px-3 w-auto sm:w-36 md:w-48 rounded-md bg-primary  text-xs sm:text-base md:text-lg font-semibold text-white transition-all duration-200 ease-in-outgroup-focus-within:hover:bg-blue-600">
                    Search Agents
                  </button>
                  <div className="absolute w-full top-[60%]">
                    {search && SearchSuggestion()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full z-0">
            <Image src={Banner} layout="fill" objectFit="cover" />
          </div>
        </div>
      </header>
      {/* Top Rated Agents */}
      <section>
        <div className="lg:container mx-auto px-10 my-10">
          <h1 className="text-4xl font-extrabold my-5 text-center md:text-left">
            Toronto’s Top Rated Agents{" "}
          </h1>
          <div className="text-gray text-xl text-center md:text-left">
            Clients loved working with these agents
          </div>
          <div className="flex flex-wrap w-full h-full my-15">
            <div className="flex flex-row w-full md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl font-semibold">
                    Tim Hortons
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage2} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl  font-semibold">
                    Joan Wrigley
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:w-1/2 px-4 gap-2 mb-15 ">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage3} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl  font-semibold">
                    Lydia Hollie
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage4} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl  font-semibold">
                    Dave Lordsky
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="container mx-auto px-4">
            <nav
              className="flex flex-row flex-nowrap justify-between md:justify-center items-center text-gray font-semibold space-x-3"
              aria-label="Pagination"
            >
              <a
                className="flex w-10 h-10 mr-1 justify-center items-center  bg-white  hover:border-gray-300"
                href="#"
                title="Previous Page"
              >
                <span className="sr-only">Previous Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                </svg>
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-blue-100 text-primary hover:border-gray-300"
                href="#"
              >
                1
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white hover:border-gray-300"
                href="#"
              >
                2
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded pointer-events-none"
                href="#"
              >
                ....
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white hover:border-gray-300"
                href="#"
              >
                4
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white  hover:border-gray-300"
                href="#"
              >
                5
              </a>
              <a
                className="flex w-10 h-10 ml-1 justify-center items-center  bg-white text-b hover:border-gray-300"
                href="#"
                title="Next Page"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      {/* Choose Your Agent */}
      <section>
        <div className="lg:container mx-auto px-10 py-5 bg-[#FBFCFF] flex gap-0 flex-col md:flex-row mb-15">
          <div className="max-w-xs md:max-w-full md:w-2/5 text-center mx-auto">
            <Image src={Banner2} />
          </div>
          <div className="w-full md:w-3/5 md:mt-20">
            <span className="text-primary uppercase text-sm font-semibold">
              CHOOSING YOUR AGENT
            </span>
            <h1 className="text-4xl mt-2 mb-5">How to choose your agent</h1>
            <div className="text-lg my-8">
              You should choose an agent you are comfortable working with and
              who you feel has your best interests at heart. In order to make a
              decision, try asking prospective agents the following:
            </div>
            <div>
              <div className="space-y-5">
                <div className="flex gap-3 text-lg font-normal items-center">
                  <ListIcon /> How and where your property will be advertised
                </div>
                <div className="flex gap-3 text-lg font-normal items-center">
                  <ListIcon />
                  Ask to see examples of their success in selling properties
                  like yours
                </div>
                <div className="flex gap-3 text-lg font-normal items-center">
                  <ListIcon />
                  How often you can expect feedback from the agent while your
                  property is on the marke
                </div>
              </div>
            </div>
            <Button
              variant="main"
              size="small"
              className="flex gap-3 w-46 h-12 text-base mt-16 capitalize"
            >
              <Search />
              Find an agent
            </Button>
          </div>
        </div>
      </section>
      {/* Most Active Agents */}
      <section>
        <div className="lg:container mx-auto px-10 my-10">
          <h1 className="text-4xl font-extrabold my-5 text-center md:text-left">
            Toronto’s Most Active Agents
          </h1>

          <div className="flex flex-wrap w-full h-full my-15">
            <div className="flex flex-row w-full md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl font-semibold">
                    Tim Hortons
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage2} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl  font-semibold">
                    Joan Wrigley
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage3} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl  font-semibold">
                    Lydia Hollie
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:w-1/2 px-4 gap-2 mb-15">
              <div className="w-1/5 h-full text-center">
                <Image src={AgentImage4} />
              </div>
              <div className="flex flex-col w-4/5 pr-10 h-full gap-3">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="text-lg lg:text-2xl  font-semibold">
                    Dave Lordsky
                  </div>
                  <div className="text-sm font-normal flex items-center">
                    <Image src={RatingImage} />
                    5.0
                  </div>
                </div>
                <div className="text-base font-normal">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the{" "}
                  <span className="text-base font-semibold">...More</span>
                </div>
                <Button
                  variant="main"
                  size="small"
                  className="h-12 self-end text-xs  mt-6"
                >
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="container mx-auto px-4">
            <nav
              className="flex flex-row flex-nowrap justify-between md:justify-center items-center text-gray font-semibold space-x-3"
              aria-label="Pagination"
            >
              <a
                className="flex w-10 h-10 mr-1 justify-center items-center  bg-white  hover:border-gray-300"
                href="#"
                title="Previous Page"
              >
                <span className="sr-only">Previous Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                </svg>
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-blue-100 text-primary hover:border-gray-300"
                href="#"
              >
                1
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white hover:border-gray-300"
                href="#"
              >
                2
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded pointer-events-none"
                href="#"
              >
                ....
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white hover:border-gray-300"
                href="#"
              >
                4
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white  hover:border-gray-300"
                href="#"
              >
                5
              </a>
              <a
                className="flex w-10 h-10 ml-1 justify-center items-center  bg-white text-b hover:border-gray-300"
                href="#"
                title="Next Page"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section>
        <div className="w-full bg-primary-dark mt-20 mb-15">
          <div className="lg:container flex flex-col xl:flex-row mx-auto px-10 py-8 xl:py-14 text-gray-500 ">
            <div className="w-full mb-6 xl:mb-0 mx-auto">
              <div className="mb-4 text-white text-4xl font-bold">
                Connect with an expert local agent
              </div>

              <div className="text-base text-secondary max-w-md">
                Our agents are here to help you. Let’s make your home search or
                sale easier.
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-center flex-nowrap flex-row w-full pt-3">
                <input
                  type="text"
                  placeholder="Search by name or location"
                  className="w-4/5 md:w-3/5 h-12 p-3 text-gray-900 rounded-l-sm border border-solid border-gray-300 shadow"
                />
                <button className=" h-12 w-20 rounded-r-sm bg-primary flex justify-center items-center border border-solid border-gray-300 ">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chat With Agent */}
      <section>
        <div className="container mx-auto px-10 pb-5 bg-[#FBFCFF] flex flex-col md:flex-row mb-15">
          <div className="order-2 max-w-xs md:max-w-full md:w-2/5 mx-auto text-center mt-10">
            <Image src={Banner3} />
          </div>
          <div className="order-1 w-full md:w-3/5 md:mt-20">
            <span className="text-primary uppercase text-sm font-semibold">
              CHAT WITH AN AGENT
            </span>
            <h1 className="text-4xl font-extrabold mt-2 mb-5">
              Real Time Conversation
            </h1>
            <div className="text-lg my-8">
              You should choose an agent you are comfortable working with and
              who you feel has your best interests at heart. you should be able
              to get your best agent by considering the following simple steps:
            </div>
            <div>
              <div className="space-y-5">
                <div className="flex gap-3 text-lg font-normal items-center">
                  <ListIcon /> Search for an agent by name or location
                </div>
                <div className="flex gap-3 text-lg font-normal items-center">
                  <ListIcon />
                  Filter the results base on your interests
                </div>
                <div className="flex gap-3 text-lg font-normal items-center">
                  <ListIcon />
                  Select and contact your best match agent
                </div>
              </div>
            </div>
            <Button
              variant="main"
              size="small"
              className="flex gap-3 w-46 h-12 text-base mt-16 capitalize"
            >
              <Search />
              Find an agent
            </Button>
          </div>
        </div>
      </section>
      {/* Articals */}
      <section>
        <div className="lg:container mx-auto md:px-10 my-10 mb-15">
          <h1 className="text-4xl font-extrabold my-8 text-center md:text-left">
            Latest Articles by Agents
          </h1>

          <div className="flex flex-col gap-10 md:gap-0 md:flex-row flex-wrap w-full h-full my-10">
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 justfy-center h-full gap-3  px-8">
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex gap-2 text-base text-gray-light uppercase font-normal items-center">
                  <CalenderIcon />
                  March 21, 2022
                </div>
                <div className="flex gap-2 text-base text-gray-light uppercase font-normal items-center">
                  <BookIcon />5 Min Read
                </div>
              </div>
              <div className="w-full h-full">
                <Image src={Artical1} layout="responsive" objectFit="fill" />
              </div>
              <div className="font-semibold text-lg md:text-2xl break-words  capitalize">
                How to get multiple offers on your home
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex gap-2 text-base font-normal uppercase items-center text-gray-light">
                  <Image src={AgentImage} width="40" height="40" />
                  Jhon
                </div>
                <div className="flex gap-2 text-base font-normal uppercase items-center text-gray-light">
                  <TagIcon />
                  SELLING
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 justfy-center h-full gap-3 px-8">
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex gap-2  text-base text-gray-light uppercase font-normal items-center">
                  <CalenderIcon />
                  March 21, 2022
                </div>
                <div className="flex gap-2 text-base text-gray-light uppercase font-normal items-center">
                  <BookIcon />5 Min Read
                </div>
              </div>
              <div className="w-full h-full">
                <Image src={Artical2} layout="responsive" objectFit="fill" />
              </div>
              <div className="font-semibold  text-lg  md:text-2xl break-words  capitalize">
                10 home buying tips for first-time home buyers
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex gap-2  text-base font-normal uppercase items-center text-gray-light">
                  <Image src={AgentImage3} width="40" height="40" />
                  Jhon
                </div>
                <div className="flex gap-2  text-base font-normal uppercase items-center text-gray-light">
                  <TagIcon />
                  SELLING
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 justfy-center h-full gap-3 px-8">
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex gap-2  text-base text-gray-light uppercase font-normal items-center">
                  <CalenderIcon />
                  March 21, 2022
                </div>
                <div className="flex gap-2 text-base text-gray-light uppercase font-normal items-center">
                  <BookIcon />5 Min Read
                </div>
              </div>
              <div className="w-full h-full">
                <Image src={Artical3} layout="responsive" objectFit="fill" />
              </div>
              <div className="font-semibold text-lg  md:text-2xl break-words  capitalize">
                15 simple and relaxing decor ideas to transform your home
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex gap-2 text-base font-normal uppercase items-center text-gray-light">
                  <Image src={AgentImage2} width="40" height="40" />
                  Jhon
                </div>
                <div className="flex gap-2  text-base font-normal uppercase items-center text-gray-light">
                  <TagIcon />
                  SELLING
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="container mx-auto px-4 mt-20">
            <nav
              className="flex flex-row flex-nowrap justify-between md:justify-center items-center text-gray font-semibold space-x-3"
              aria-label="Pagination"
            >
              <a
                className="flex w-10 h-10 mr-1 justify-center items-center  bg-white  hover:border-gray-300"
                href="#"
                title="Previous Page"
              >
                <span className="sr-only">Previous Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                </svg>
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-blue-100 text-primary hover:border-gray-300"
                href="#"
              >
                1
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white hover:border-gray-300"
                href="#"
              >
                2
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded pointer-events-none"
                href="#"
              >
                ....
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white hover:border-gray-300"
                href="#"
              >
                4
              </a>
              <a
                className="flex w-10 h-10 mx-1 justify-center items-center rounded border border-gray-200 bg-white  hover:border-gray-300"
                href="#"
              >
                5
              </a>
              <a
                className="flex w-10 h-10 ml-1 justify-center items-center  bg-white text-b hover:border-gray-300"
                href="#"
                title="Next Page"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 256 512"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
