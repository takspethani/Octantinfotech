import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Correct the path if needed
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];

  const classes_active = ({ isActive }) => ({
    color: isActive ? " #02DBDB" : "white",
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return  (
    <nav className="bg-black xl:py-1 py-3 sticky top-0 flex px-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="logo h-14 xl:h-16 xl:w-48">
                <img src={logo} alt="Logo" className="h-14 xl:h-16 xl:w-48" />
            </div>
            <div>
                <ul
                    className={`nav-links font-normal text-white gap-x-8 text-base tracking-widest sm:w-1/2 sm:h-screen md:h-auto right-0 w-full py-4 pl-10 space-y-8 bg-black md:w-auto absolute top-20 md:space-y-0 md:pl-0 md:flex md:static md:flex-row md:gap-x-8 md:right-auto md:items-center ${
                            isOpen ? 'block' : 'hidden'
                        } md:block`}
                >
                    {navItems.map(({ title, path }) => (
                        <li key={title}>
                            <NavLink to={path} style={classes_active}>
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="hamburger-icon md:hidden pr-6 items-center flex" onClick={toggleMenu}>
            <FaBars className="text-white text-2xl" />
        </div>
    </nav>
);
}

export default Navbar;






