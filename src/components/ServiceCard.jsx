import React from "react";
import Heading from "./Heading"; // Import the Heading component
import img1 from "../assets/serviceImg/AppDevelopment.png"; // Corrected file name
import img2 from "../assets/serviceImg/GameDevelopment.png";
import img3 from "../assets/serviceImg/WebDevelopment.png"; // Make sure this file exists
import img4 from "../assets/serviceImg/UiUx.png";
function ServiceSection() {
  // Define the data array
  const data = [
    {
      head: "We are Services Provider",
      image: img1,
      title: "App Development",
    },
    {
      head: "Why Choose Us",
      image: img2,
      title: "Game Development",
    },
    {
      head: "Testimonials",
      image: img3,
      title: "Web Development",
    },
    {
      head: "Embark on Success With Octant's IT Solutions.",
      image: img4,
      title: "UX Development",
    },
  ];

  return (
    <>
      <Heading head="We are Services Provider" />
      <section className="py-8 px-4 sm:px-0">
        <div className="menu-box mx-auto container">
          <div className="serviceMenu grid sm:grid-cols-2 max-w-sm mx-auto sm:max-w-full sm:mx-8 lg:grid-cols-4 gap-6 ">
            {/* Map through the data */}
            {data.map((item, index) => (
              <div
                key={index}
                className="box-1 py-16 sm:py-8 lg:py-12 rounded-2xl"
              >
                <div className="menu flex flex-col items-center gap-6">
                  <div className="menu-icon">
                    {/* Use require to import images */}
                    <img src={item.image} alt={item.head} className="menuImg" />
                  </div>
                  <div className="menu-name w-44">
                    <h1 className="font-semibold text-2xl text-center text-black ">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceSection;
