"use client";

import { createContext, useContext, useRef } from "react";

interface AnimationContextType {
  hasAnimated: boolean;
  markAsAnimated: () => void;
}

// Create Context
const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

// Create Provider
export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const hasAnimatedRef = useRef(false); // Persist state across navigation

  const markAsAnimated = () => {
    hasAnimatedRef.current = true;
  };

  return (
    <AnimationContext.Provider
      value={{ hasAnimated: hasAnimatedRef.current, markAsAnimated }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

// Hook for consuming the context
export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
