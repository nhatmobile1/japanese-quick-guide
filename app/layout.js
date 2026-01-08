export const metadata = {
  title: "日本語 Japanese Phrases",
  description: "Japanese language learning phrases and vocabulary",

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "日本語",
  },

  // Theme color
  themeColor: "#c45c48",

  // Icons
  icons: {
    icon: [
      {
        url: "/japanese-icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/japanese-icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // Manifest
  manifest: "/japanese-icons/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="apple-touch-icon"
          href="/japanese-icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/japanese-icons/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
