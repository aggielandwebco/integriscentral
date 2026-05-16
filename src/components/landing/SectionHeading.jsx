<<<<<<< HEAD
import React from "react";

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left" ? "mx-0 text-left" : "mx-auto text-center";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {tag && (
        <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {tag}
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
=======
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
>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda
