import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/comman/Footer";
import Header from "../components/comman/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}