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
    const loadPreline = () => {
      if (document.readyState === "complete") {
        loadScript();
      } else {
        window.addEventListener("load", loadScript);
      }
    };

    const loadScript = () => {
      const prelineScript = document.createElement("script");
      prelineScript.src =
        "https://cdn.jsdelivr.net/npm/preline@latest/dist/preline.min.js";
      prelineScript.async = true;
      document.body.appendChild(prelineScript);

      prelineScript.onload = () => {
        if (typeof window.$hsOverlayCollection === "undefined") {
          window.$hsOverlayCollection = [];
        }

        if (window.HSStaticMethods) {
          window.HSStaticMethods.autoInit();
        } else {
        }
      };

      prelineScript.onerror = () => {};
    };

    loadPreline();

    // Cleanup event listener
    return () => {
      window.removeEventListener("load", loadScript);
    };
  }, []);

  return null;
}
