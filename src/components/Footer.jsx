import React from "react";
import InfoCard from "./InfoCard";
import Heading from "./Heading";
import ServicesLink from "./ServicesLink";
import Contact from "./Contact";

const Ldata = {
  title: "Links",
  items: [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" },
    { name: "Institute", link: "/Institute" },
  ],
};

const Ldata2 = {
  title: "Services",
  items: [
    { name: "Web Development", link: "/Web_Development" },
    { name: "SEO & Digital Marketing", link: "/SEO_&_Digital_Marketing" },
    { name: "App Development", link: "/App_Development" },
    { name: "Game Development", link: "/Game_Development" },
    { name: "UI/UX Design", link: "/UI/UX_Design" },
  ],
};

const Footer = () => {
  return (
    <footer className="">
      <div className="mt-12 sm:mt-24 lg:mt-36 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  md:gap-x-32 lg:gap-10 lg:pl-4 lg:pr-16 pl-8 pr-16">
            <InfoCard />
            <ServicesLink linkData={Ldata2} />
            <ServicesLink linkData={Ldata} />
            <Contact />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
