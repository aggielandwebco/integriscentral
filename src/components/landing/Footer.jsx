import React from "react";
import { Link } from 'react-router-dom';

const footerLinks = {
  Services: [
    { label: "Website Design", href: "#services" },
    { label: "Branding & Identity", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "Digital Strategy", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Values", href: "#values" },
  ],
  Support: [
    { label: "Contact", href: "#contact" },
    { label: "Project Planning", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-[#070708]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl shadow-black/20">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">
              Let’s build together
            </span>
            <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to launch a more polished digital presence?
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground max-w-xl">
              Integris Creative helps ambitious companies scale their brand and web presence with premium design, strategic execution, and long-term support.
            </p>
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p>contact@integriscentral.com</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p>979 291 5166</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p>Houston, Texas</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground mb-4">
                  {category}
                </h4>
                <ul className="space-y-3 text-sm">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src="/assets/integris-creative-logo-dark.png" alt="Integris Creative" className="h-5 w-5 object-contain opacity-90" />
            <p>© {new Date().getFullYear()} Integris Creative. All rights reserved.</p>
          </div>
          <p>Premium digital strategy, design, and website systems.</p>
        </div>
      </div>
    </footer>
  );
}

