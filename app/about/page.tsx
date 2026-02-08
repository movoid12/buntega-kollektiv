"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-light"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <p>Back to Home</p>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-black mb-8">
            About
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
            Buntega! – A trans-sociocultural festival in Leipzig’s East: coming together to create, enjoy, and share — to meet, understand, and have fun!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-light text-black mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Buntega! is a trans-sociocultural festival rooted in the belief that creativity and connection thrive when people come together.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                We see festivals as more than just events — they are living spaces where art, culture, and community intersect. By encouraging collaboration across cultures, generations, and disciplines, we aim to spark understanding, empathy, and joy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">
                Our Values
              </h2>

              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We value openness, inclusivity, and participation. Everyone is invited to create, enjoy, and share — whether through art, music, workshops, or the simple act of spending time together. Buntega! celebrates diversity as a source of strength and inspiration, where each person’s voice contributes to a richer collective experience.
              </p>

            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">
                The Journey
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                What started as a local initiative in Leipzig’s East has grown into a vibrant community movement. Every edition of Buntega! brings new collaborations, fresh perspectives, and lasting friendships.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Our journey continues as we explore new ways to connect people through creativity and shared experiences, always guided by the spirit of togetherness and curiosity that started it all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
