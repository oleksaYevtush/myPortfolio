import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-2 bg-[#180f1f]/95 backdrop-blur-md border-b border-[#33353F]/40 md:hidden">
      {links.map((link, index) => (
        <li key={index} onClick={closeMenu} className="w-full text-center">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
