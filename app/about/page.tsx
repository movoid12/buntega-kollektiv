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
            Buntega Kollektiv is more than a festival—it&apos;s a movement
            dedicated to fostering authentic connections through music, art, and
            shared experiences.
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
                We believe in the transformative power of collective creativity.
                Our festivals are designed as spaces where boundaries
                dissolve—between artist and audience, between disciplines,
                between strangers who become friends.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Every element of our events is curated with intention: from the
                selection of artists who share our values of authenticity and
                innovation, to the sustainable practices that honor our
                environment, to the inclusive atmosphere that welcomes all who
                come with open hearts and minds.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-light text-black mb-3">
                    Community
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Building lasting connections that extend far beyond the
                    festival grounds.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-black mb-3">
                    Sustainability
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Protecting the environment that hosts our celebrations for
                    future generations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-black mb-3">
                    Innovation
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Pushing boundaries in art, music, and festival experience
                    design.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-black mb-3">
                    Inclusivity
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Creating safe spaces where everyone can express their
                    authentic selves.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">
                The Journey
              </h2>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                What began as a small gathering of friends sharing music in 2018
                has grown into an international community of artists, creators,
                and conscious festival-goers. Each year has brought new
                challenges and opportunities for growth, shaping us into the
                collective we are today.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Through adaptation and evolution, we&apos;ve learned that the
                essence of Buntega Kollektiv isn&apos;t tied to any single
                format or location—it lives in the connections we create and the
                experiences we share.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
