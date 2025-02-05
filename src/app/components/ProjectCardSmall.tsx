"use client";

import { Chip } from "@mui/material";
import { iconsMap } from "./Icons"; // Ensure correct import path

interface ProjectCardSmallProps {
  imageSrc: string;
  title: string;
  description: string;
  icons?: string[]; // Explicitly define the type for icons
}

export function ProjectCardSmall({
  imageSrc,
  title,
  description,
  icons = [],
}: ProjectCardSmallProps) {
  return (
    <div className="relative w-full border shadow-sm rounded-xl bg-neutral-900 border-neutral-700 shadow-neutral-700/70">
      {/* Image */}
      <img
        className="w-full h-full rounded-xl bg-black opacity-20 z-0"
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
        <p className="mt-1 text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
