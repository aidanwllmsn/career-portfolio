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
    "ExpressJS",
    "Flask",
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

const colors: Record<keyof typeof skills, string> = {
  Languages: "bg-[#1E3A8A] text-[#93C5FD]",
  "Frameworks & Libraries": "bg-[#166534] text-[#86EFAC]",
  Databases: "bg-[#581C87] text-[#D8B4FE]",
  "Development Tools": "bg-[#7F1D1D] text-[#FCA5A5]",
  Methodologies: "bg-[#92400E] text-[#FCD34D]",
};

const Skills = () => {
  return (
    <div className="my-8">
      {/* <h1 className="text-white text-4xl font-bold">Skills</h1> */}
      <h1 className="text-white text-2xl my-8 font-bold">Languages</h1>
      <div className="my-8">
        {Object.entries(skills).map(([category, items]) => {
          const typedCategory = category as keyof typeof colors; // Cast category to the correct type

          return (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-bold text-white">{category}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {(items as string[]).map((skill) => (
                  <div
                    key={skill}
                    className={`px-4 py-1 rounded-3xl ${colors[typedCategory]} font-medium`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
