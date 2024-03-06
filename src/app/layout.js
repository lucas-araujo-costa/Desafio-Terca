import { Poppins } from "next/font/google";
import '../global.css'

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "CEP Finder",
  description: "Buscador de CEP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
