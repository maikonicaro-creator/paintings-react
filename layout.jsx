import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata = {
  title: "Paintings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={sourceSans.variable}>
      <body className="bg-page font-sans font-light text-neutral-500 antialiased">
        {children}
      </body>
    </html>
  );
}
