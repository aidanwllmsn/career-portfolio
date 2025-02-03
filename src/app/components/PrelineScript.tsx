"use client";

import { useEffect } from "react";
import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    $hsOverlayCollection: never[];
  }
}

export default function PrelineScript() {
  useEffect(() => {
    const loadPreline = async () => {
      // Dynamically load Preline script
      const prelineScript = document.createElement("script");
      prelineScript.src =
        "https://cdn.jsdelivr.net/npm/preline@latest/dist/preline.min.js";
      prelineScript.async = true;
      document.body.appendChild(prelineScript);

      prelineScript.onload = () => {
        if (typeof window.$hsOverlayCollection === "undefined") {
          window.$hsOverlayCollection = [];
          console.log("Manually defined $hsOverlayCollection");
        }

        if (window.HSStaticMethods) {
          window.HSStaticMethods.autoInit(["carousel"]);
        } else {
          console.error("HSStaticMethods is not defined.");
        }
      };

      prelineScript.onerror = () => {
        console.error("Failed to load Preline script.");
      };
    };

    loadPreline();
  }, []);

  return null;
}
