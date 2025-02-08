"use client";
import { useEffect, useState } from "react";
import BioCard from "./components/BioCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Carousel from "./components/Carousel";
import { Tabs, Tab } from "@heroui/tabs";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="px-4 text-lg">
      <div className="max-w-[50rem] mx-auto mt-8">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <BioCard />

          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              radius="sm"
              variant="solid"
              color="secondary"
              fullWidth
              size="lg"
              className="mt-8"
            >
              <Tab key="skills" title="Skills">
                <Skills />
              </Tab>
              <Tab key="experience" title="Experience">
                <Experience />
              </Tab>
              <Tab key="education" title="Education">
                <Education />
              </Tab>
            </Tabs>
            <h1 className="text-white text-4xl font-bold my-8">Projects</h1>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
