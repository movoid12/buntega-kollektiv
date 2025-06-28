"use client";

import Link from "next/link";

type FestivalYear = {
  year: string;
  description: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  festivalYears: FestivalYear[];
};

export default function MobileMenu({
  isOpen,
  onClose,
  festivalYears,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
    >
      <div className="flex flex-col items-center pt-4 pb-2 space-y-2">
        {festivalYears.map((item) => (
          <Link
            key={item.year}
            href={`/${item.year}`}
            className="block py-2 text-lg font-light text-black hover:text-gray-600 transition-colors"
            onClick={onClose}
          >
            {item.year}
          </Link>
        ))}
        <Link
          href="/about"
          className="block py-2 text-lg font-light text-black hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          About
        </Link>
      </div>
    </div>
  );
}
