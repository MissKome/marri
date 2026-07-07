"use client";

import { useState } from "react";

import Hero from "@/components/home/Hero";
import Metrics from "@/components/home/Metrics";
import Timeline from "@/components/home/Timeline";
import ReleaseNotes from "@/components/home/ReleaseNotes";
import Gallery from "@/components/home/Gallery";
import QAApproval from "@/components/home/QAApproval";
// import DeploymentConsole from "@/components/deployment/DeploymentConsole";
// import Invitation from "@/components/invitation/Invitation";

  export default function Home() {
//   const [deployed, setDeployed] = useState(false);

//   if (deployed) {
//     return <Invitation />;
//   }

  return (
    <>
      <Hero />
      <Metrics />
      <Timeline />
      <ReleaseNotes />
      <Gallery />
      <QAApproval
  onDeploy={() => {
    alert("Deployment feature coming in the next sprint 🚀");
  }}
/>
      
{/* 
      <DeploymentConsole
        onComplete={() => setDeployed(true)}
      /> */}
    </>
  );
}