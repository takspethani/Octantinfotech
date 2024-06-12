import React from "react";
import Heading from "./Heading";
import reason_1 from "../assets/reason_menu/res1.png";
import reason_2 from "../assets/reason_menu/res2.png";
import reason_3 from "../assets/reason_menu/res3.png";
import reason_4 from "../assets/reason_menu/res4.png";
import reason_5 from "../assets/reason_menu/res5.png";
function Section2() {
  const reasonsData = [
    {
      image: reason_1,
      title: "Strategic Approach",
      description:
        "We find opportunities to understand your industry, your competition, and your long-term vision, then, at that point, influence our expertise to recommend solutions that drive you forward.",
    },
    {
      image: reason_2,
      title: "On-Time Delivery",
      description:
        "Our demonstrated project management methodologies and transparent communication ensure that your projects are delivered on time and within budget, limiting interruptions and minimizing your return on capital invested.",
    },
    {
      image: reason_3,
      title: "Customized Solution",
      description:
        "Our team of experts works closely with you to understand your particular requirements. We don't offer cookie-cutter solutions, we create custom-tailored arrangements that perfectly coordinate with your current infrastructure and work process.",
    },
    {
      image: reason_4,
      title: "Competitive Pricing",
      description:
        "We offer competitive rates without compromising on quality. We have confidence in building a long-term partnership, and our pricing reflects our commitment to offering some benefit and exceeding your assumptions.",
    },
    {
      image: reason_5,
      title: "Dedicated Team",
      description:
        "We relegate a committed group of specialists to your undertaking, ensuring you have reliable resources and progressing support all through the entire commitment. We're passionate about your prosperity, and we're here to direct you constantly.",
    },
  ];

  return (
    <>
      <Heading head="Why Choose Us" />
      <section className="mx-4">
        <div className="s2 container mx-auto ">
          <div className="choose_menu sm:gap-6 sm:mx-3 md:mx-3 lg:grid-cols-3 gap-8 grid sm:grid-cols-2 sm:max-w-none max-w-sm mx-auto">
            {reasonsData.map((item, index) => (
              <div
                key={index}
                className="reason gap-8 items-center pt-6 pb-8 px-6"
              >
                <div className="reason_heading flex flex-col sm:flex-row justify-center gap-5 lg:gap-8 items-center mb-4">
                  <div className="reason-i">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="">
                    <h1 className="font-semibold text-2xl">{item.title}</h1>
                  </div>
                </div>
                <div className="reason_details text-gray-500 sm:text-xl md:font-normal text-center md:text-left">
                  <h1 className="text-xl">{item.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
