import { JSX } from "react";
import FeaturesSection from "./sections/FeaturesSection.tsx";
import InformationSection from "./sections/information/InformationSection.tsx";
import WhySignalSection from "./sections/why-signal/WhySignalSection.tsx";

function Main(): JSX.Element {
  return (
    <>
      <WhySignalSection />
      <InformationSection />
      <FeaturesSection />
    </>
  );
}

export default Main;
