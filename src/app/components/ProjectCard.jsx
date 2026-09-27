import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-purple-800/40 bg-[#241328]/60 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-900/25 group">
      <div
        className="relative h-48 sm:h-52 w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${imgUrl})` }}>
        {/* Desktop hover overlay */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#180f1f]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex gap-4">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="h-12 w-12 border-2 border-purple-300 hover:border-white rounded-full flex items-center justify-center transition-colors hover:scale-110">
              <CodeBracketIcon className="h-6 w-6 text-purple-200 hover:text-white" />
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo Preview"
              className="h-12 w-12 border-2 border-purple-300 hover:border-white rounded-full flex items-center justify-center transition-colors hover:scale-110">
              <EyeIcon className="h-6 w-6 text-purple-200 hover:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between p-5 text-white">
        <div>
          <h5 className="mb-2 text-lg sm:text-xl font-bold font-title text-[#f0e2f1] text-center md:text-left">
            {title}
          </h5>
          <p className="text-[#cbb5cc] text-xs sm:text-sm font-title leading-relaxed text-center md:text-left">
            {description}
          </p>
        </div>
        {/* Direct links visible on all devices, especially touch/mobile */}
        <div className="flex items-center justify-center md:justify-start gap-3 mt-4 pt-3 border-t border-purple-900/30">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-purple-300 hover:text-white px-3 py-1.5 rounded-full bg-purple-950/60 hover:bg-purple-900/80 transition-colors">
              <CodeBracketIcon className="h-4 w-4" />
              <span>Code</span>
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-pink-300 hover:text-white px-3 py-1.5 rounded-full bg-pink-950/60 hover:bg-pink-900/80 transition-colors">
              <EyeIcon className="h-4 w-4" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
