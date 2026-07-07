"use client";

import { createContext, useContext, useState } from "react";

export type Stage =
  | "HOME"
  | "DEPLOY"
  | "INVITATION"
  | "RSVP"
  | "THANKYOU";

interface ExperienceContextType {
  stage: Stage;
  setStage: (stage: Stage) => void;
}

const ExperienceContext = createContext<
  ExperienceContextType | undefined
>(undefined);

export function ExperienceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stage, setStage] = useState<Stage>("HOME");

  return (
    <ExperienceContext.Provider
      value={{
        stage,
        setStage,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error(
      "useExperience must be used inside ExperienceProvider"
    );
  }

  return context;
}