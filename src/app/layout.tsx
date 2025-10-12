import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageShell from "../components/PageShell";
import ScrollToTopButton from "../components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://franciskwarteng.com"),
  title: "Francis Kwarteng - Biomedical Scientist",
  description: "Biomedical Scientist focused on elucidating molecular mechanisms of physiological and pathological pathways",
  icons: {
    icon: "/photo.jpeg",
    shortcut: "/photo.jpeg",
    apple: "/photo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francis Kwarteng",
    jobTitle: "Biomedical Scientist",
    description: "Biomedical Scientist focused on elucidating molecular mechanisms of physiological and pathological pathways",
    url: "https://franciskwarteng.com",
    image: "https://franciskwarteng.com/photo.jpeg",
    email: "kwartengfo@warhawks.ulm.edu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bronx",
      addressRegion: "New York",
      addressCountry: "United States",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Louisiana at Monroe",
        degree: "Master of Science - MS, Biology/Biological Sciences",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Cape Coast",
        degree: "Bachelor of Science - BS, Medical Laboratory Science",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "NYU Langone Health",
      jobTitle: "Blood Bank Technologist",
    },
    knowsAbout: [
      "Aseptic Technique",
      "Bacterial Cell Culture",
      "Translational Research",
      "Medical Laboratory Science",
      "Biomedical Research",
    ],
    sameAs: ["https://www.linkedin.com/in/franciskwarteng-8711bb1ab"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageShell>
          {children}
          <ScrollToTopButton />
        </PageShell>
      </body>
    </html>
  );
}
