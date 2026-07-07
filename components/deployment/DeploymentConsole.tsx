"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  "Packaging Memories...",
  "Verifying Timeline...",
  "Loading Gallery...",
  "Merging Families...",
  "Initializing Forever...",
];

export default function DeploymentConsole({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(steps[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;

        const index = Math.min(
          Math.floor(next / 20),
          steps.length - 1
        );

        setCurrentStep(steps[index]);

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 1200);

          return 100;
        }

        return next;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#071A35] px-6 text-white">
      <div className="w-full max-w-xl">

        <h1 className="text-4xl font-bold">
          Deploying Version Forever
        </h1>

        <p className="mt-3 text-white/70">
          Final deployment in progress...
        </p>

        <div className="mt-10 h-4 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-[#F4B6A8] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-6 text-lg">
          {currentStep}
        </p>

        <p className="mt-3 text-3xl font-bold">
          {progress}%
        </p>

        {progress === 100 && (
          <div className="mt-8 flex items-center gap-3 text-green-400">
            <CheckCircle2 />
            Deployment Successful
          </div>
        )}
      </div>
    </section>
  );
}