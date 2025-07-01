"use client";
import Link from "next/link";

export default function HomePage() {
  const festivalYears = [
    { year: "2018", description: "The Beginning" },
    { year: "2019", description: "Evolution" },
    { year: "2020", description: "Transformation" },
  ];

  return (
    <main>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-black mb-8">
              Buntega
              <br />
              Kollektiv
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A celebration of music, art, and community through the years
            </p>
          </div>
        </section>

        {/* Festival Years Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {festivalYears.map((item) => (
                <Link
                  key={item.year}
                  href={`/${item.year}`}
                  className="group block"
                >
                  <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-12 text-center border border-gray-200 hover:border-gray-300">
                    <h2 className="text-4xl md:text-5xl font-extralight text-black mb-4 group-hover:text-gray-700 transition-colors">
                      {item.year}
                    </h2>
                    <p className="text-lg font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                      {item.description}
                    </p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-light text-black border-b border-black pb-1">
                        Explore Festival
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
