"use client";

import { Chip } from "@mui/material";
import { iconsMap } from "./Icons";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  icons?: string[];
  link: string;
  slug: string;
}

export function ProjectCard({
  imageSrc,
  title,
  description,
  icons = [],
  slug,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="relative overflow-hidden w-full border shadow-sm rounded-xl bg-neutral-900 border-neutral-700 shadow-neutral-700/70"
    >
      {/* Image */}
      <Image
        className="w-full h-auto rounded-xl bg-black opacity-50 z-0 transform transition-transform duration-500 hover:scale-105 object-cover"
        src={`/${imageSrc}`}
        alt="Card Image"
        width={500} // Adjust as needed
        height={300} // Adjust as needed
        priority
      />

      {/* Text Content */}
      <div className="absolute bottom-0 start-0 end-0 p-4 md:p-5">
        <h3 className="text-xl md:text-3xl font-semibold md:font-bold text-white">
          {title}
        </h3>
        {/* Icons Row */}
        {icons.length > 0 && ( // Only render if icons exist
          <div className="flex flex-wrap gap-2 mt-3">
            {icons.map((skill) => {
              const SkillIcon = iconsMap[skill as keyof typeof iconsMap];

              if (!SkillIcon) return null; // Skip if the icon is undefined

              return (
                <Chip
                  key={skill}
                  icon={<SkillIcon />}
                  label={skill}
                  sx={{
                    backgroundColor: "#27272a",
                    color: "white",
                    border: "1px solid #3b3b3f",
                    "& .MuiChip-icon": {
                      color: "white",
                      fontSize: {
                        xs: 10,
                        md: 20,
                      },
                    },
                    fontSize: {
                      xs: 10,
                      md: 15,
                    },
                    padding: {
                      xs: "0px",
                      md: "4px",
                    },
                    height: {
                      xs: 24,
                      md: 32,
                    },
                  }}
                />
              );
            })}
          </div>
        )}
        <p className="mt-1 text-neutral-200 font-normal md:font-semibold text-xs md:text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
