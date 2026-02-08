export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-light text-black mb-2">
              Buntega Kollektiv
            </h3>
            <p className="text-gray-600 font-light">Music • Art • Community</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 font-light text-sm">
            © 2024 Buntega Kollektiv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
