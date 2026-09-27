import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="relative h-52 sm:h-60 rounded-t-xl group overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-300">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub link"
              className="h-12 w-12 sm:h-14 sm:w-14 mr-3 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-colors">
              <CodeBracketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Preview link"
              className="h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-colors">
              <EyeIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-5 px-4 flex flex-col justify-between min-h-[110px]">
        <div>
          <h5 className="mb-1 text-lg sm:text-xl font-semibold text-center">{title}</h5>
          <p className="text-[#ADB7BE] font-title text-sm text-center">{description}</p>
        </div>
        <div className="flex justify-center gap-3 mt-3 sm:hidden">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#ADB7BE] hover:text-white px-3 py-1 rounded-full border border-[#ADB7BE]">
              <CodeBracketIcon className="h-4 w-4" /> Code
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
              <EyeIcon className="h-4 w-4" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
