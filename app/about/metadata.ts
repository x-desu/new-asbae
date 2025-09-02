import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | asbae - Leading AI Solutions",
  description: "Learn about asbae, our mission, values, and the team behind our innovative AI solutions. Discover how we're shaping the future of artificial intelligence.",
  keywords: ["AI solutions", "artificial intelligence", "machine learning", "about us", "our team", "company values"],
  
  openGraph: {
    title: "About Us | asbae - Leading AI Solutions",
    description: "Discover the team and vision behind asbae's innovative AI solutions. Learn about our mission to democratize AI technology.",
    url: "https://asbae.com/about",
    siteName: "asbae",
    images: [
      {
        url: "https://asbae.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "asbae - About Us"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "About Us | asbae - Leading AI Solutions",
    description: "Meet the team and learn about our mission to make AI accessible to everyone.",
    images: ["https://asbae.com/twitter-about.jpg"],
  },
  
  alternates: {
    canonical: "https://asbae.com/about",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};
