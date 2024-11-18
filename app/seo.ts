import { Metadata } from "next";

const BASE_URL = "https://kayen.org";

export const getDefaultMetadata = (): Metadata => ({
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kayen | Decentralized Exchange on Chiliz",
    template: "%s | Kayen",
  },
  description:
    "Execute transactions of Fan Tokens via a decentralized exchange on Chiliz. Trade, provide liquidity, and participate in the future of sports finance.",
  keywords: ["Kayen", "DEX", "Chiliz", "Fan Tokens", "Decentralized Exchange", "Sports Finance", "Crypto", "Spicy"],
  openGraph: {
    type: "website",
    title: "Kayen Protocol",
    description: "Execute transactions of Fan Tokens via a decentralized exchange on Chiliz.",
    url: BASE_URL,
    siteName: "Kayen",
    images: [
      {
        url: `${BASE_URL}/images/OG.png`,
        width: 1200,
        height: 675,
        alt: "Kayen Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayen Protocol",
    description: "Execute transactions of Fan Tokens via a decentralized exchange on Chiliz.",
    images: [`${BASE_URL}/images/OG.png`],
  },
  alternates: {
    canonical: BASE_URL,
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
    google: "TamDzN3AE-EJuOQSCjTGkMrNEjBZ3QvVSp6DoTtBRNM",
  },
});

// Define metadata for specific sections/features
export const getSectionMetadata = (section: string): Metadata => {
  const baseMetadata = getDefaultMetadata();

  const sectionConfigs: Record<string, Metadata> = {
    swap: {
      title: "Swap | Trade Fan Tokens on Kayen",
      description: "Swap or provide liquidity for Fan Tokens on the Kayen Protocol.",
    },
    pool: {
      title: "Pool | Provide Liquidity on Kayen",
      description: "Provide liquidity and earn rewards on the Kayen Protocol.",
    },
    explore: {
      title: "Explore | Discover Fan Tokens on Kayen",
      description: "Explore available Fan Tokens and trading opportunities on Kayen.",
    },
    docs: {
      title: "Documentation | Kayen Protocol",
      description: "Learn about Kayen Protocol. Technical documentation, guides, and API references.",
    },
  };

  return {
    ...baseMetadata,
    ...sectionConfigs[section],
  };
};
