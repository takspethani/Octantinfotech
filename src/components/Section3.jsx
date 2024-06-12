import React from "react";
import Heading from "./Heading";
import view1 from "../assets/review_section/view1.png";
import view2 from "../assets/review_section/view2.png";
import view3 from "../assets/review_section/view3.png";
import view4 from "../assets/review_section/view4.png";
function Section3() {
  const reviews = [
    {
      title: "Speechless with how easy this was to integrate",
      content: `"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme. Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application. If you care for your time, I hands down would go with this."`,
      author: "Bonnie Green",
      position: "Developer at Open AI",
      image: view1,
    },
    {
      title: "Solid foundation for any project",
      content: `"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project. Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"`,
      author: "Bonnie Green",
      position: "Developer at Open AI",
      image: view2,
    },
    {
      title: "Mindblowing workflow and variants",
      content: `"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯. Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit). Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."`,
      author: "Bonnie Green",
      position: "Developer at Open AI",
      image: view3,
    },
    {
      title: "Efficient Collaborating",
      content: `"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind. You have many examples that can be used to create a fast prototype for your team."`,
      author: "Bonnie Green",
      position: "Developer at Open AI",
      image: view4,
    },
  ];
  return (
    <>
      <Heading head="Testimonials" />
      <section className="mx-4">
        <div className="container mx-auto">
          <div className="review_section grid  lg:grid-cols-2 grid-cols-1  sm:max-w-none max-w-sm mx-auto">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="review bg-gray-800 text-center tracking-wider border border-gray-200"
              >
                <div className="review_containt gap-y-5 flex flex-col p-8 px-4 sm:p-12">
                  <h2 className="text-white sm:text-lg xl:text-xl sm:leading-10">
                    {item.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-500">
                    {item.content}
                  </p>
                </div>
                <div className="viewer_img pb-10">
                  <div className="img_details items-center flex justify-center gap-x-4">
                    <img
                      src={item.image}
                      alt=""
                      height="36px"
                      width="36px"
                      className="rounded-full"
                    />
                    <div className="">
                      <h2 className="text-base text-white">{item.author}</h2>
                      <h2 className="text-sm text-gray-600 font-thin">
                        {item.position}
                      </h2>
                    </div>
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

export default Section3;
