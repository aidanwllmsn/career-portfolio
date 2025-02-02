"use client";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import BioCard from "./components/BioCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { Tabs, Tab } from "@heroui/tabs";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // This will trigger the fade-in
  }, []);

  return (
    <div className="px-4 text-lg">
      <NavBar />
      <div className="max-w-[50rem] mx-auto mt-8">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <BioCard />
          <Skills />
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              radius="lg"
              variant="solid"
              color="secondary"
              fullWidth
              size="lg"
            >
              <Tab key="experiene" title="Experience">
                <Experience />
              </Tab>
              <Tab key="education" title="Education">
                <Education />
              </Tab>
            </Tabs>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
