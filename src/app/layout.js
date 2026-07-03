import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/comman/Footer";
import Header from "../components/comman/Header";
import { UserProvider } from "../context/UserContext";
export const metadata = {
  title: {
    default: "BuildHome",
    template: "%s | BuildHome",
  },
  description: "Professional Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <UserProvider>
          <Header />

        {children}

          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}