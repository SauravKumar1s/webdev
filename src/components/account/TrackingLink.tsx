import React from "react";
import Cross from "../../icon/Cross";
import AdvancedOptions from "./AdvancedOptions";

const TrackingLink = () => {
  return (
    <div className="px-4 pt-6  bg-gray-300">
      <div className="grid lg:grid-cols-2  gap-3  ">
        <div className="">
          {/* <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 bg-white"> */}

          <div className="h-[526px] py-6 px-6 rounded-xl border border-gray-200 bg-[#FCFCFC] container  w-[100%]">
            <div>
              {/* <div></div> */}
              <div className="flex">
                <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center relative ">
                  <div className="w-6 h-6 rounded-full bg-[#5BDB8A]"></div>
                  <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-base">
                    1
                  </p>
                </div>
                <h1 className="font-bold  ml-4 mb-8">Tracking clicks</h1>
              </div>
            </div>
            <div className="md:col-span-5 mb-6">
              <label className="font-semibold">Add Link</label>
              <input
                type="text"
                placeholder="URL://s"
                className="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
              />
            </div>
            <div className="md:col-span-5 mb-6">
              <label className="font-semibold">Title</label>

              <input
                type="text"
                placeholder="Add title for your link "
                className="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
              />
            </div>
            <div className="md:col-span-5 mb-6">
              <label className="font-semibold">Tag</label>

              <input
                type="text"
                placeholder="Add your tag "
                className="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
              />
            </div>

            <div className="md:col-span-5 mb-6">
              <label className="font-semibold">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
              />
            </div>
          </div>
          <div>
          <div className="h-70 py-6 px-6 rounded-xl border border-gray-200 bg-white container flex flex-col w-[100%] mt-10">
            <div>
              <h1 className="font-bold  ml-4 mb-8">Tracking clicks</h1>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="">
                <span className=" flex justify-center items-center bg-[#EFFCF4] rounded-full px-5 py-2.5 text-xl font-semibold text-gray-700 ">
                  photography
                  <div className="mt-2">
                    <Cross />
                  </div>
                </span>
              </div>
              <div className="">
                <span className=" flex justify-center items-center bg-[#EFFCF4] rounded-full px-5 py-2.5 text-xl font-semibold text-gray-700 ">
                  photography
                  <div className="mt-2">
                    <Cross />
                  </div>
                </span>
              </div>
              <div className="">
                <span className=" flex justify-center items-center bg-[#EFFCF4] rounded-full px-5 py-2.5 text-xl font-semibold text-gray-700 ">
                  photography
                  <div className="mt-2">
                    <Cross />
                  </div>
                </span>
              </div>
              <div className="">
                <span className=" flex justify-center items-center bg-[#EFFCF4] rounded-full px-5 py-2.5 text-xl font-semibold text-gray-700 ">
                  photography
                  <div className="mt-2">
                    <Cross />
                  </div>
                </span>
              </div>
              <div className="">
                <span className=" flex justify-center items-center bg-[#EFFCF4] rounded-full px-5 py-2.5 text-xl font-semibold text-gray-700 ">
                  photography
                  <div className="mt-2">
                    <Cross />
                  </div>
                </span>
              </div>{" "}
              <div className="">
                <span className=" flex justify-center items-center bg-[#EFFCF4] rounded-full px-5 py-2.5 text-xl font-semibold text-gray-700 ">
                  photography
                  <div className="mt-2">
                    <Cross />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
       
       
        </div>
      <div className=" py-6 px-6 bg-white rounded-xl ">
          <AdvancedOptions />
        </div>
        {/* </div> */}
 
      </div>
    </div>
  );
};

export default TrackingLink;
