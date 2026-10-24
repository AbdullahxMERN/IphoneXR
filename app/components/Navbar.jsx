"use client";

import { useState } from "react";

export default function Navbar({ onOpenSpecs, onOpenBuy }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Finishes", href: "#finishes" },
    { name: "Features", href: "#features" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#1d1d1f]/90 backdrop-blur-md text-white border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.44-5.99-9.13-10.79-19.78-14.4-31.95-3.62-12.17-5.43-23.77-5.43-34.81 0-14.54 3.73-26.68 11.2-36.42 7.46-9.74 16.9-14.74 28.31-15.01 4.58 0 9.77 1.25 15.57 3.75 5.8 2.5 9.74 3.81 11.83 3.92 1.91-.11 5.96-1.47 12.16-4.08 6.2-2.61 11.39-3.76 15.58-3.46 13.04.87 23.44 5.94 31.2 15.22-11.52 6.96-17.17 16.64-16.96 29.03.22 9.68 4.02 17.73 11.41 24.14 7.39 6.41 16.3 10.06 26.74 10.93-2.39 7.07-5.22 14.57-8.49 22.52zM119.22 31.86c0-7.07 2.55-13.81 7.66-20.22 5.11-6.41 11.47-10.61 19.07-12.64.22 1.3.33 2.5.33 3.59 0 7.07-2.67 14.03-8.01 20.88-5.33 6.85-11.75 10.77-19.25 11.75-.22-1.09-.33-2.22-.33-3.36z" />
            </svg>
            <span className="font-bold text-sm tracking-tight text-white">iPhone XR</span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-xs text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenSpecs}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            Specs
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBuy}
            className="px-3.5 py-1 rounded-full bg-[#0071e3] text-white text-xs font-medium hover:bg-[#0077ed] active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Buy
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1 text-white/80 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#161617] border-b border-white/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-white/80 hover:text-white py-1"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSpecs();
            }}
            className="text-sm text-left text-white/80 hover:text-white py-1 cursor-pointer"
          >
            Specs
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBuy();
            }}
            className="w-full mt-2 py-2.5 rounded-full bg-[#0071e3] text-white text-xs font-semibold text-center cursor-pointer"
          >
            Buy iPhone XR
          </button>
        </div>
      )}
    </nav>
  );
}
