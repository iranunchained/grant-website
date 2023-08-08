import Heading from "components/Heading/Heading";
import React from "react";

export interface Legal {
  id: string;
  heading: string;
  subHeading: string;
}

export interface SectionLegalProps {
  className?: string;
}

const SectionLegal: React.FC<SectionLegalProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionLegal relative ${className}`}>
      <Heading name="🧑🏼‍⚖️👨🏻‍⚖️ IranUnchained Legal Guidelines">
        With IranUnchained, we are using our crypto expertise to fundraise for Iran using
        cryptocurrency while maintaining full compliance with OFAC sanctions policies. We researched
        the existing OFAC policies in depth, hired a law firm co-founded by a former associate
        director at OFAC, and published our findings here - Iran Aid:{" "}
        <b>
          <a href="https://medium.com/@iranunchained/iran-aid-a-legal-primer-ede9e8f4826d">
            A Legal Primer
          </a>
        </b>
        .
      </Heading>
    </div>
  );
};

export default SectionLegal;
