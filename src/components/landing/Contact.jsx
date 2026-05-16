import React from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="rounded-2xl border border-white/10 bg-[#161618]/60 p-8 text-center sm:p-12">
        <SectionHeading
          tag="Contact"
          title="Ready to centralize your systems?"
          description="Start with a focused conversation about the tools, data, and workflows your business needs connected."
        />
        <a
          href="mailto:hello@integriscentral.com"
          className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          hello@integriscentral.com
        </a>
      </div>
    </SectionWrapper>
  );
}
