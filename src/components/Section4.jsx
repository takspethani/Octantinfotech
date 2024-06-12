import React from "react";
import Heading from "./Heading";

function Section4() {
  const SuccessData = [
    { number: "50+", label: "Clients" },
    { number: "20+", label: "Employees" },
    { number: "35+", label: "Projects" },
    { number: "4", label: "Awards" },
  ];
  return (
    <div>
      <Heading head="Embark on Success With Octant's IT Solutions." />
      <div className="mx-4 ">
        <div className="container mx-auto">
          <div className="details_company bg-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-lg px-2 py-8 sm:p-4 lg:p-8 items-center text-center max-w-sm mx-auto sm:max-w-full justify-around">
            {SuccessData.map((item, index) => (
              <div
                key={index}
                className="text-white font-semibold flex flex-col gap-2 sm:p-8"
              >
                <h1 className="text-white sm:text-3xl md:text-4xl lg:text-5xl text-3xl text-center">
                  {item.number}
                </h1>
                <h1 className="text-gray-500 text-xl lg:text-2xl">
                  {item.label}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
