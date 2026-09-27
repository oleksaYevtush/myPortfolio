import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="md:hidden bg-[#180f1f]/95 backdrop-blur-lg border-b border-purple-900/30 px-6 py-6 transition-all duration-300">
      <ul className="flex flex-col space-y-4 items-center">
        {links.map((link, index) => (
          <li key={index} onClick={closeMenu} className="w-full text-center">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
