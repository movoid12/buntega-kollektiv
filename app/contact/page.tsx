"use client";

export default function ContactPage() {
  const textHeadline = "Get in Touch with Us";

  return (
    
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <section className="w-full max-w-2xl mb-12">
        <h1 className="text-4xl font-extralight text-black mb-8 text-center">
          {textHeadline}
        </h1>
      </section>
      <section className="w-full max-w-md bg-white border border-black rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          Contact Us
        </h1>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-white text-black resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
