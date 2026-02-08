"use client";

import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { imagesFrom2018 } from "@/lib/get-images";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Festival2018() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = imagesFrom2018; // Assuming this is an array of image metadata for 2018
  const imageKeys = Object.keys(images);

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
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
                special. A gathering of people who love to cook, artists, musicians, and creative minds
                who shared a vision of community through art. The first Buntega
                Kollektiv festival set the foundation for what would become an
                annual celebration of creativity and connection.
              </p>

              {/* YouTube Video Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
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
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full max-w-md aspect-3/4">
                <div className="h-full flex flex-col items-center justify-center">
                  <div>
                    <Image
                      src="/2018/Poster.jpg"
                      alt="2018 Poster"
                      width={400}
                      height={533}
                      className="object-fit w-full h-full rounded-lg"
                    />
                  </div>
                  <p className="text-gray-500 font-light mb-2">
                    Buntega Poster 2018
                  </p>
                  <p className="text-sm text-gray-400">Designed by Ćaner</p>
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
                  <h4 className="text-xl font-light text-black">Theresa</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Singer/Songwriter
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">&quot;Kids of Teheran&quot;</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Short film from Daniel Asadi Faezi
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">
                    PiPaPo
                  </h4>
                  <p className="text-gray-600 font-light mt-2">
                    Math Rock /  Indie Rock band
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">&quot;Approaching Truckdrivers&quot;</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Documentary from Daniel Asadi Faezi
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">Gatti Randali</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Balcan / Oriental / Flamenco band
                  </p>
                </div>

                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black"> Yaxinem</h4>
                  <p className="text-gray-600 font-light mt-2">
                     Hip-Hop & Trap music
                  </p>
                </div>

                

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">M.LCDP & Mrs.Mojo.Risin</h4>
                  <p className="text-gray-600 font-light mt-2">
                    Latino / Deep House DJ set
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">DJ Buti (Buti Sekhalanga - DJ Buti) </h4>
                  <p className="text-gray-600 font-light mt-2">
                    Afro Drumbeat DJ set
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-light text-black">DJ Naitwa </h4>
                  <p className="text-gray-600 font-light mt-2">
                    House / Techno DJ set
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
                    Cooking Workshop with Lukas & Mouaz
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Syrian-German fusion cooking workshop where participants learned to make traditional dishes while sharing stories and cultural insights.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-light text-black mb-2">
                    Loom Workshop with Andrea
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Weaving in the Garden
                  </p>
                </div>

                    <div>
                  <h4 className="text-xl font-light text-black mb-2">
                    DJ Musik Workshop with DJ dørbystarr
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                     DJ dørbystarr from Leipzig will be here, spinning HipHop and doing events like this. He&apos;s been doing it for 15 years! He&apos;ll be showing the ropes of being a DJ, making music, jamming, beatboxing, and freestyling. Bring your instruments!
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-light text-black mb-2">
                    Photo Workshop with Miguel
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    The workshop is about the composition rules of photography. We will look at and analyze pictures, discuss opinions, take photos, and discuss them. After that, you will walk around Rabet Park and take pictures for the festival. A phone is sufficient, no professional camera necessary.
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
            {imageKeys.map((key, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-200 rounded-lg cursor-pointer hover:opacity-80 transition-opacity group overflow-hidden"
                onClick={() => openCarousel(index)}
              >
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src={images[key].url}
                    alt={`Festival Photo ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Modal */}
        {isCarouselOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">

            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <Carousel
              opts={{
                startIndex: currentImageIndex,
              }}

            >
              <CarouselContent>
                {imageKeys.map((key, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center h-screen w-full">
                      <Image
                        src={images[key].url}
                        alt={`Festival Photo ${index + 1}`}
                        width={600}
                        height={600}
                        loading="lazy"
                      />
                    </div>

                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 text-white" />
              <CarouselNext className="absolute right-0 text-white" />
            </Carousel>


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
