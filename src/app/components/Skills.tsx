import * as React from "react";
import Chip from "@mui/material/Chip";
import { iconsMap } from "./Icons";

const skills = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C/C++",
    "Swift",
    "HTML/CSS",
  ],
  "Frameworks & Libraries": [
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Material UI",
    "Django",
  ],
  Databases: ["Postgres", "SQL", "MongoDB", "AWS"],
  "Development Tools": [
    "Linux",
    "Git",
    "VIM",
    "XCode",
    "VSCode",
    "GitHub",
    "Figma",
  ],
  Methodologies: ["Agile", "SCRUM"],
};

const colors: Record<
  keyof typeof skills,
  { backgroundColor: string; color: string }
> = {
  Languages: { backgroundColor: "#1E3A8A", color: "#93C5FD" },
  "Frameworks & Libraries": { backgroundColor: "#166534", color: "#86EFAC" },
  Databases: { backgroundColor: "#581C87", color: "#D8B4FE" },
  "Development Tools": { backgroundColor: "#7F1D1D", color: "#FCA5A5" },
  Methodologies: { backgroundColor: "#92400E", color: "#FCD34D" },
};

const Skills = () => {
  return (
    <div className="my-8">
      <div className="my-8">
        {Object.entries(skills).map(([category, items]) => {
          const typedCategory = category as keyof typeof colors; // Cast category to the correct type

          return (
            <div key={category} className="mb-6">
              <h3 className="text-2xl font-bold text-white">{category}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {(items as string[]).map((skill) => {
                  // Cast skill to the correct key type of iconsMap
                  const SkillIcon = iconsMap[skill as keyof typeof iconsMap];

                  return (
                    <Chip
                      icon={<SkillIcon />} // Dynamically render the correct icon
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: colors[typedCategory].backgroundColor,
                        color: colors[typedCategory].color,
                        "& .MuiChip-icon": {
                          color: colors[typedCategory].color,
                        },
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
