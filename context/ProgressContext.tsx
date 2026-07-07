"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type Section =
  | "hero"
  | "timeline"
  | "release"
  | "gallery";

interface ProgressContextType {
  completed: Section[];
  completeSection: (section: Section) => void;
}

const ProgressContext =
  createContext<ProgressContextType | null>(null);

export function ProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [completed, setCompleted] = useState<Section[]>([]);

  function completeSection(section: Section) {
    setCompleted((prev) =>
      prev.includes(section)
        ? prev
        : [...prev, section]
    );
  }

  const value = useMemo(
    () => ({
      completed,
      completeSection,
    }),
    [completed]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "useProgress must be used inside ProgressProvider"
    );
  }

  return context;
}