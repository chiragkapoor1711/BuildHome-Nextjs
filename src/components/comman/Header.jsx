"use client";
import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });
    const data = await response.json();

    if (data.success) {
      setUser(null);
      router.replace("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          BuildHome
        </Link>

        <ul className="flex items-center gap-8">
          <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
          <li><Link href="/product" className="hover:text-yellow-400 transition">Products</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>

          {user ? (
            <>
              <li>
                <span className="font-semibold">👤 {user.name}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-yellow-400 transition"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" className="hover:text-yellow-400 transition">
                <LogIn size={20} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}