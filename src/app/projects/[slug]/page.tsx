"use client";

import { use } from "react";
import { slides } from "../../components/slides";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { iconsMap } from "../../components/Icons";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const { slug } = use(params); // Unwrap the promise using React.use()

  // Find the project based on the slug
  const project = slides.find((slide) => slide.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-[50rem] mx-auto mt-8 px-4 ">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        {project.icons.length > 0 && ( // Only render if icons exist
          <div className="flex flex-wrap gap-2 mt-3 mb-8">
            {project.icons.map((skill) => {
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
        <p className="text-2xl font-bold mb-4">About This Project:</p>
        <p className="text-lg mb-8">{project.longDescription}</p>

        {/* Render the button only if project.link is not empty */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="mb-8 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-[#27272a] hover:bg-buttonhover"
          >
            Visit Project
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        )}

        <Image
          className="rounded-xl mb-8"
          src={`/${project.imageSrc}`}
          alt="Card Image"
          width={500}
          height={300}
          priority
          style={{ width: "100%", height: "auto" }} // Makes it responsive
        />
      </div>
    </div>
  );
}
