import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-base sm:px-5 sm:py-2.5 sm:text-lg cursor-pointer transition-colors duration-200`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
