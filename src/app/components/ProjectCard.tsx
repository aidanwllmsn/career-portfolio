"use client";

import { Chip } from "@mui/material";
import { iconsMap } from "./Icons";
import Link from "next/link";

interface ProjectCardSmallProps {
  imageSrc: string;
  title: string;
  description: string;
  icons?: string[];
  link: string;
}

export function ProjectCard({
  imageSrc,
  title,
  description,
  icons = [],
  link,
}: ProjectCardSmallProps) {
  return (
    <Link
      href={link} // Set the target path for navigation
      className="relative overflow-hidden w-full border shadow-sm rounded-xl bg-neutral-900 border-neutral-700 shadow-neutral-700/70"
    >
      {/* Image */}
      <img
        className="w-full h-full rounded-xl bg-black opacity-50 z-0 transform transition-transform duration-500 hover:scale-105 object-cover"
        src={imageSrc}
        alt="Card Image"
      />

      {/* Text Content */}
      <div className="absolute bottom-0 start-0 end-0 p-4 md:p-5">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        {/* Icons Row */}
        {icons.length > 0 && ( // Only render if icons exist
          <div className="flex flex-wrap gap-2 mt-3">
            {icons.map((skill) => {
              const SkillIcon = iconsMap[skill as keyof typeof iconsMap];

              if (!SkillIcon) return null; // Skip if the icon is undefined

              return (
                <Chip
                  key={skill}
                  icon={<SkillIcon style={{ fontSize: 20 }} />} // Ensure correct rendering
                  label={skill}
                  sx={{
                    backgroundColor: "#27272a",
                    color: "white",
                    border: "1px solid #3b3b3f",
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                  }}
                />
              );
            })}
          </div>
        )}
        <p className="mt-1 text-neutral-200 font-semibold text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
