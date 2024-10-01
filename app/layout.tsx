import { Inter } from "next/font/google";
import "../app/styles/global.scss";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:locale" content="en_US" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>{" "}
      <body className={inter.className}>
        <div className="sticky top-0 ">
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
