import React from "react";
import TrackingLink from "../../components/account/TrackingLink";
import Search from "../../icon/Search";
import Down from "../../icon/down";
import Chat from "../../icon/Chat";
import Notification from "../../icon/Notification";

const Navbar = () => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          {/* <!--search bar --> */}

          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          </button>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <div className="sm:hidden  flex">
              <svg
                xmlns="http://ww50w3.org/2000/svg"
                className="w-4 fill-current"
                viewBox="0 0 35.997 36.004"
              >
                <path
                  id="Icon_awesome-search"
                  data-name="search"
                  d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                ></path>
              </svg>
            </div>
            
          </button>
         
          <div hidden className="md:block">
            
            <div className="relative hidden sm:flex  items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <Search />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="lg:w-[500px] w-[250px] pl-14 pr-4 py-2.5 rounded-sm text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>

           
          </div>

          <div className="flex space-x-4">
            {/* <!--/search bar --> */}

            <button
              aria-label="chat"
              className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <Chat />
            </button>
            <button
              aria-label="notification"
              className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
            >
              <Notification />
            </button>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span className="sm:flex hidden">All Server</span>
                  <Down />
                </button>
              </div>

              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <TrackingLink />
    </div>
  );
};

export default Navbar;
