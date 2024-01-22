import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import icon from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ajay UI/UX Designer",
  description: "Ajay UI/UX Designer Portfolio",
  image: icon,
};

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
