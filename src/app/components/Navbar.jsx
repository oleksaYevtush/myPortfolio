"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Workplace from "../../../public/workplace.png";
import MenuIcon from "/public/menu.png";
import MenuOverlay from "./MenuOverlay";
import Icon from "/public/close.png";

import Link from "next/link";

const navLinks = [
  {
    title: "<About/>",
    path: "#about",
  },
  {
    title: "<Projects/>",
    path: "#projects",
  },
  {
    title: "<Skill/>",
    path: "#skill",
  },
  {
    title: "<Contact/>",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="border-none top-0 left-0 right-0 bg-[#180f1f] bg-opacity-100">
      <div className="container flex flex-wrap items-center justify-between px-12 py-2 mx-auto lg:py-4">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-5xl">
          <Image src={Workplace} width={60}
            height={60} alt="workplace" />
        </Link>
        <div className="block mobile-menu md:hidden">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 text-slate-200 hover:text-white focus:outline-none focus:border-none focus:ring-0">
            <Image src={MenuIcon} width={40} height={40} alt="menu icon" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center py-2 lg:px-3 hover:text-white focus:outline-none focus:border-none focus:ring-0">
            <Image src={Icon} width={40} height={40} alt="x icon" />
          </button>
        )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>  
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
