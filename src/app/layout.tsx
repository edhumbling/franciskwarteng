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
  title: {
    default: "Francis Kwarteng - Biomedical Scientist | NYU Langone Health",
    template: "%s | Francis Kwarteng - Biomedical Scientist"
  },
  description: "Biomedical Scientist Francis Kwarteng specializes in molecular mechanisms of physiological and pathological pathways. Blood Bank Technologist at NYU Langone Health with expertise in Giardia lamblia research, protein-protein interactions, and translational medicine.",
  keywords: [
    "Francis Kwarteng",
    "Biomedical Scientist",
    "Blood Bank Technologist",
    "NYU Langone Health",
    "Giardia lamblia research",
    "protein-protein interactions",
    "translation initiation",
    "medical laboratory science",
    "parasitic disease research",
    "translational research",
    "aseptic technique",
    "bacterial cell culture",
    "clinical laboratory",
    "biomedical research",
    "drug target identification"
  ],
  authors: [{ name: "Francis Kwarteng", url: "https://franciskwarteng.com" }],
  creator: "Francis Kwarteng",
  publisher: "Francis Kwarteng",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://franciskwarteng.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://franciskwarteng.com",
    siteName: "Francis Kwarteng - Biomedical Scientist",
    title: "Francis Kwarteng - Biomedical Scientist | NYU Langone Health",
    description: "Biomedical Scientist Francis Kwarteng specializes in molecular mechanisms of physiological and pathological pathways. Blood Bank Technologist at NYU Langone Health with expertise in Giardia lamblia research, protein-protein interactions, and translational medicine.",
    images: [
      {
        url: "/photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Francis Kwarteng - Biomedical Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis Kwarteng - Biomedical Scientist | NYU Langone Health",
    description: "Biomedical Scientist Francis Kwarteng specializes in molecular mechanisms of physiological and pathological pathways. Blood Bank Technologist at NYU Langone Health.",
    images: ["/photo.jpeg"],
    creator: "@franciskwarteng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/photo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/photo.jpeg",
  },
  manifest: "/manifest.json",
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
    givenName: "Francis",
    familyName: "Kwarteng",
    jobTitle: ["Biomedical Scientist", "Blood Bank Technologist"],
    description: "Biomedical Scientist Francis Kwarteng specializes in molecular mechanisms of physiological and pathological pathways. Blood Bank Technologist at NYU Langone Health with expertise in Giardia lamblia research, protein-protein interactions, and translational medicine.",
    url: "https://franciskwarteng.com",
    image: "https://franciskwarteng.com/photo.jpeg",
    email: "kwartengfo@warhawks.ulm.edu",
    telephone: "+1-XXX-XXX-XXXX", // Replace with actual phone if available
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
        url: "https://www.ulm.edu",
        degree: "Master of Science - MS, Biology/Biological Sciences",
        startDate: "2020",
        endDate: "2023"
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Cape Coast",
        url: "https://ucc.edu.gh",
        degree: "Bachelor of Science - BS, Medical Laboratory Science",
        startDate: "2015",
        endDate: "2019"
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "NYU Langone Health",
      url: "https://nyulangone.org",
      jobTitle: "Blood Bank Technologist",
      startDate: "2024-10"
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "BS MLS (ASCPi)",
        credentialCategory: "certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        name: "New York State Licensed Clinical Laboratory Technologist",
        credentialCategory: "license"
      }
    ],
    knowsAbout: [
      "Aseptic Technique",
      "Bacterial Cell Culture", 
      "Translational Research",
      "Medical Laboratory Science",
      "Biomedical Research",
      "Giardia lamblia research",
      "Protein-protein interactions",
      "Translation initiation",
      "Drug target identification",
      "Clinical laboratory operations",
      "Blood banking",
      "Quality control"
    ],
    sameAs: [
      "https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://franciskwarteng.com"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://franciskwarteng.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Francis Kwarteng - Biomedical Scientist",
    url: "https://franciskwarteng.com",
    description: "Professional website of Francis Kwarteng, Biomedical Scientist and Blood Bank Technologist at NYU Langone Health",
    author: {
      "@type": "Person",
      name: "Francis Kwarteng"
    },
    publisher: {
      "@type": "Person", 
      name: "Francis Kwarteng"
    },
    inLanguage: "en-US",
    copyrightYear: "2024",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://franciskwarteng.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Francis Kwarteng Professional Portfolio",
    url: "https://franciskwarteng.com",
    description: "Professional portfolio showcasing biomedical research, laboratory expertise, and scientific achievements",
    founder: {
      "@type": "Person",
      name: "Francis Kwarteng"
    },
    areaServed: "United States",
    knowsAbout: [
      "Biomedical Research",
      "Medical Laboratory Science", 
      "Parasitic Disease Research",
      "Protein-Protein Interactions",
      "Translation Initiation",
      "Drug Target Identification"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Francis Kwarteng" />
        <meta name="application-name" content="Francis Kwarteng" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-tooltip" content="Francis Kwarteng - Biomedical Scientist" />
        <meta name="msapplication-navbutton-color" content="#10b981" />
        <meta name="msapplication-TileImage" content="/photo.jpeg" />
        <meta name="msapplication-square70x70logo" content="/photo.jpeg" />
        <meta name="msapplication-square150x150logo" content="/photo.jpeg" />
        <meta name="msapplication-square310x310logo" content="/photo.jpeg" />
        <meta name="msapplication-wide310x150logo" content="/photo.jpeg" />
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
