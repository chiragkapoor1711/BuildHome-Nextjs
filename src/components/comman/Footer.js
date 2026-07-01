import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              BuildHome
            </h2>

            <p className="text-gray-400 leading-7">
              We provide high-quality construction services with innovative
              designs, expert craftsmanship, and timely project delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-yellow-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Interior Design</li>
              <li>Renovation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400">
              📍 Ambala, Haryana
            </p>

            <p className="text-gray-400 mt-2">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-400 mt-2">
              ✉ info@buildhome.com
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 BuildHome. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">
              Facebook
            </a>

            <a href="#" className="hover:text-yellow-400">
              Instagram
            </a>

            <a href="#" className="hover:text-yellow-400">
              LinkedIn
            </a>

            <a href="#" className="hover:text-yellow-400">
              Twitter
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}