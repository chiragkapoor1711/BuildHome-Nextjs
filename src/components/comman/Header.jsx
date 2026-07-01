import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          BuildHome
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
          </li>

          <li>
            <Link href="/product" className="hover:text-yellow-400 transition">
              Products
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}