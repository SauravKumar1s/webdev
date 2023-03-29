import React, { MouseEventHandler, useState } from "react";
import image from "../../img/scan.svg";

const AdvancedOptions = () => {
  const [checkoutItems, setCheckoutItems] = useState([
    {
      id: 1,
      check: "Link encryption",
      isChecked: false,
      inputs: [
        {
          id: 1,
          placeholder: "Enter your password",
          label: "Enter password",
        },
      ],
    },
    {
      id: 2,
      check: "Rotate link",
      isChecked: false,
      inputs: [
        {
          id: 2,
          placeholder: "URL://s",
          label: "Destination",
        },
      ],
    },

    {
      id: 3,
      check: "Cloak link",
      isChecked: false,
      inputs: [
        {
          id: 3,
          placeholder: "The link will appear like ;",
          label: "Link",
        },
      ],
    },
  ]);
  const [isChecked, setIsChecked] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleCheck: MouseEventHandler<HTMLInputElement> = (event) => {
    setIsChecked(event.currentTarget.checked);
    setImageUrl(image);
  };

  const handleCheckboxChange = (itemId: number) => {
    const updatedItems = checkoutItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setCheckoutItems(updatedItems);
  };

  const handleDestinationChange = (itemId: number, value: string) => {
    const updatedItems = checkoutItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, destination: value };
      }
      return item;
    });
    setCheckoutItems(updatedItems);
  };

  return (
    <>
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
        <div>
          {checkoutItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-center mb-5">
                <input
                  checked={item.isChecked}
                  id={`checked-checkbox-${item.id}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-[#5BDB8A] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border-gray-600"
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <label
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor={`checked-checkbox-${item.id}`}
                >
                  {item.check}
                </label>
              </div>
              {item.isChecked && (
                <div className="md:col-span-5 mb-6">
                  {item.inputs.map((input) => (
                    <div key={input.id}>
                      <label className="font-semibold">{input.label}</label>
                      <input
                        type="text"
                        placeholder={input.placeholder}
                        className="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-[#5BDB8A] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border-gray-600"
              onClick={handleCheck}
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              image
            </label>
          </div>
          {isChecked && <img src={image} alt="example" />}
        </div>

        <div className="flex items-center mb-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-[#5BDB8A] border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#5BDB8A] dark:border-gray-600"
              onClick={handleCheck}
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              image
            </label>
          </div>
          {<p>this is </p>}
        </div>
     
    </>
  );
};

export default AdvancedOptions;
