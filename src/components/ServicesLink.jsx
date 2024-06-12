import React from "react";
import { NavLink } from "react-router-dom";

function ServicesLink({ linkData }) {
  const classes_active = ({ isActive }) => ({
    color: isActive ? " #02DBDB" : "white",
  });

  return (
    <div className="my-8 flex">
      <div>
        <h3 className="blue text-3xl font-normal sm:font-bold sm:text-3xl text-white mb-4">
          {linkData.title}
        </h3>
        <ul className="text-gray-400 flex flex-col gap-y-3 font-bold">
          {linkData.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <NavLink to={item.link} style={classes_active}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesLink;
