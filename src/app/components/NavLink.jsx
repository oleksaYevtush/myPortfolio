import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="font-title block py-2 px-3 text-[#d4c1da] hover:text-white transition-colors duration-200 text-base sm:text-lg rounded-lg hover:bg-purple-900/30 md:hover:bg-transparent">
      {title}
    </Link>
  );
};

export default NavLink;
