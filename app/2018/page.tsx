"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Festival2018() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 12);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-light"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-black mb-6">
                2018
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
                The Beginning
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
                Our inaugural festival marked the beginning of something
                special. A gathering of artists, musicians, and creative minds
                who shared a vision of community through art. The first Buntega
                Kollektiv festival set the foundation for what would become an
                annual celebration of creativity and connection.
              </p>

              {/* YouTube Video Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-light">
                  YouTube Video Placeholder
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Festival highlights and memories
                </p>
              </div>
            </div>

            {/* Right side - Festival poster */}
            <div className="flex justify-center">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full max-w-md aspect-[3/4]">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-light mb-2">
                    Festival Poster 2018
                  </p>
                  <p className="text-sm text-gray-400">
                    Placeholder for festival artwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-light text-black mb-6">Lineup</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">Main Stage</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Electronic • Ambient • Experimental
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">
                    Art Installations
                  </h4>
                  <p className="text-gray-600 font-light mt-2">
                    Interactive • Visual • Immersive
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">Workshops</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Sound Design • Visual Arts • Community Building
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-light text-black mb-6">
                Highlights
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-light text-black mb-2">
                    Opening Ceremony
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    A collective meditation and sound bath that set the tone for
                    three days of artistic exploration.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-light text-black mb-2">
                    Community Garden
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Participants collaborated to create a temporary garden
                    installation that grew throughout the festival.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-light text-black mb-2">
                    Closing Circle
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    A gathering where attendees shared their experiences and
                    planted seeds for future festivals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-light text-black mb-12 text-center">
            Festival Gallery
          </h3>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-200 rounded-lg cursor-pointer hover:opacity-80 transition-opacity group overflow-hidden"
                onClick={() => openCarousel(index)}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                    <p className="text-xs text-gray-500 font-light">
                      Photo {index + 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Modal */}
        {isCarouselOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <button
                onClick={closeCarousel}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Previous button */}
              <button
                onClick={previousImage}
                className="absolute left-4 text-white hover:text-gray-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Image container */}
              <div className="max-w-4xl max-h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-96 h-96 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-gray-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                    <p className="text-gray-500 font-light">
                      Festival Photo {currentImageIndex + 1}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Placeholder for gallery image
                    </p>
                  </div>
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {currentImageIndex + 1} / 12
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Navigation to other years */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-light text-black mb-12 text-center">
            Explore Other Years
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/2019"
              className="group block p-8 bg-white hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <h4 className="text-2xl font-light text-black mb-2 group-hover:text-gray-700">
                2019
              </h4>
              <p className="text-gray-600 font-light">Evolution</p>
            </Link>
            <Link
              href="/2020"
              className="group block p-8 bg-white hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <h4 className="text-2xl font-light text-black mb-2 group-hover:text-gray-700">
                2020
              </h4>
              <p className="text-gray-600 font-light">Transformation</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
