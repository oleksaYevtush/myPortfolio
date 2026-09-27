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
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#180f1f]/95 backdrop-blur-md border-b border-[#33353F]/40">
      <div className="container flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-12 py-3 mx-auto">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-5xl">
          <Image src={Workplace} width={50} height={50} alt="workplace" className="w-10 h-10 sm:w-12 sm:h-12" />
        </Link>
        <div className="block mobile-menu md:hidden">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            aria-label="Open menu"
            className="flex items-center p-2 text-slate-200 hover:text-white focus:outline-none">
            <Image src={MenuIcon} width={32} height={32} alt="menu icon" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close menu"
            className="flex items-center p-2 hover:text-white focus:outline-none">
            <Image src={Icon} width={32} height={32} alt="x icon" />
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
      {navbarOpen ? <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
