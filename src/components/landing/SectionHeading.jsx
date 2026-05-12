import React from "react";

export default function SectionHeading({ tag, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {tag && (
        <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
