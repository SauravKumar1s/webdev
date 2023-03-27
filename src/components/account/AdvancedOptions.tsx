import React from "react";

const AdvancedOptions = () => {
  return (
    <div className="h-[784px]">
      {/* <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 bg-white"> */}

      <div>
        {/* <div></div> */}
        <div className="flex ">
          <div className="w-6 h-6 rounded-full bg-[#5BDB8A] flex items-center justify-center relative  ">
            <div className="w-6 h-6 rounded-full bg-[#5BDB8A]"></div>
            <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-base">
              1
            </p>
          </div>
          <h1 className="font-bold  ml-4 mb-8">Tracking clicks</h1>
        </div>
      </div>
      <div className="flex items-center mb-5">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-[#5BDB8A] bg-gray-100 border-[#5BDB8A] rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border[#5BDB8A]"
        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Shorten link
        </label>
      </div>

      <div className="flex items-center mb-5">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-[#5BDB8A] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border-gray-600"

        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Link encryption
        </label>
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

      <div className="flex items-center mb-5">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-[#5BDB8A] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border-gray-600"

        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Rotate Link
        </label>
      </div>
      <div className="md:col-span-5 mb-6">
        <label className="font-semibold">Destination</label>

        <input
          type="text"
          placeholder="Add title for your link "
          className="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
          value=""
        />
      </div>
      <div className="flex items-center mb-5">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-[#5BDB8A] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border-gray-600"

        />
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Rotate Link
        </label>
      </div>
      <div className="md:col-span-5 mb-6">
        <label className="font-semibold">Destination</label>

        <input
          type="text"
          placeholder="Add title for your link "
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
      <div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>
<div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>
    </div>
  );
};

export default AdvancedOptions;
