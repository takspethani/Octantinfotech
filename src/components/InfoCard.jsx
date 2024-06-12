import React from "react";
import logo from "../assets/navbar-icon/octant_logo.svg";
function InfoCard() {
  const description = [
    "At Octant Infotech, we don't just build sites, we build flourishing digital environments.",
    "Allow us to be your guide as you explore the always-advancing digital landscape and achieve your online goals.",
  ];
  return (
    <div className="my-8">
      <div className="gap-y-4 flex flex-col">
        <div className="footer_logo">
          <img src={logo} alt="Octant Logo" className="h-14 xl:h-16 xl:w-48" />
        </div>

        {description.map((item, index) => (
          <p key={index} className="text-base tracking-wider text-gray-400">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
