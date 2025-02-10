"use client";
import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { slides } from "../components/slides";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // This will trigger the fade-in
  }, []);
  return (
    <div className="px-4 text-lg">
      <div className="max-w-[50rem] mx-auto mt-8">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center mb-8">
              <ProjectCard
                imageSrc={slide.imageSrc}
                title={slide.title}
                description={slide.description}
                icons={slide.icons}
                link={slide.link}
                slug={slide.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
