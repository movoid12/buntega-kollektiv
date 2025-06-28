"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const festivalYears = [
  { year: "2018", description: "The Beginning" },
  { year: "2019", description: "Evolution" },
  { year: "2020", description: "Transformation" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-light tracking-wide text-black hover:text-gray-600 transition-colors"
          >
            Buntega Kollektiv
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {festivalYears.map((item) => (
              <Link
                key={item.year}
                href={`/${item.year}`}
                className="text-lg font-light text-black hover:text-gray-600 transition-colors"
              >
                {item.year}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-lg font-light text-black hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div
                className={`w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        festivalYears={festivalYears}
      />
    </nav>
  );
}
