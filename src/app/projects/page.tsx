"use client";
import { ProjectCard } from "../components/ProjectCard";
import { slides } from "../components/slides";

export default function Projects() {
  return (
    <div className="px-4 text-lg">
      <div className="max-w-[50rem] mx-auto mt-8">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <ProjectCard
              imageSrc={slide.imageSrc}
              title={slide.title}
              description={slide.description}
              icons={slide.icons}
              link={slide.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
