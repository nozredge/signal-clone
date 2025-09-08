import { JSX } from "react";
import FeaturesSection from "./sections/FeaturesSection.tsx";
import InformationSection from "./sections/information/InformationSection.tsx";

function Main(): JSX.Element {
  return (
    <>
      <InformationSection />
      <FeaturesSection />
    </>
  );
}

export default Main;
