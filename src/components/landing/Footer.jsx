<<<<<<< HEAD
import React from "react";

const footerLinks = {
  Ecosystem: [
    { label: "Integris Nexus", href: "#ecosystem" },
    { label: "Integris Ops", href: "#ecosystem" },
    { label: "Integris Creative", href: "#ecosystem" },
    { label: "Aggieland Web Co", href: "#ecosystem" },
  ],
  Product: [
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#contact" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Values", href: "#values" },
    { label: "Careers", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-white font-bold text-xs">I</span>
              </div>
              <span className="text-foreground font-semibold tracking-tight">
                Integris<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              The modern operating system for businesses. One ecosystem to manage, scale, and grow.
            </p>
            <div className="flex gap-3">
              {["X", "Li", "Gh"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-white/10 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Integris Systems. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/30">
            Built for the future of business.
          </p>
        </div>
      </div>
    </footer>
  );
}
=======
import React from "react";

const footerLinks = {
  Ecosystem: [
    { label: "Integris Nexus", href: "#ecosystem" },
    { label: "Integris Ops", href: "#ecosystem" },
    { label: "Integris Creative", href: "#ecosystem" },
    { label: "Aggieland Web Co", href: "#ecosystem" },
  ],
  Product: [
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#contact" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Values", href: "#values" },
    { label: "Careers", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-white font-bold text-xs">I</span>
              </div>
              <span className="text-foreground font-semibold tracking-tight">
                Integris<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              The modern operating system for businesses. One ecosystem to manage, scale, and grow.
            </p>
            <div className="flex gap-3">
              {["X", "Li", "Gh"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-white/10 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Integris Systems. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/30">
            Built for the future of business.
          </p>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda
