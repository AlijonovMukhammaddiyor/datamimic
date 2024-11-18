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
    trade: {
      title: "Trade | Kayen Protocol",
      description: "Swap or provide liquidity for Fan Tokens on the Kayen Protocol.",
      alternates: {
        canonical: "https://app.kayen.org/trade",
      },
    },
    pools: {
      title: "Pools | Kayen Protocol",
      description: "Provide liquidity and earn rewards on the Kayen Protocol",
      alternates: {
        canonical: "https://app.kayen.org",
      },
    },
    offside: {
      title: "Offside | Kayen Protocol",
      description: "Explore Kayen's Offside feature for advanced trading.",
      alternates: {
        canonical: "https://app.kayen.org/offside",
      },
    },
    league: {
      title: "League | Kayen Protocol",
      description: "Join Kayen's League for enhanced trading opportunities.",
      alternates: {
        canonical: "https://app.kayen.org/league",
      },
    },
  };

  return {
    ...baseMetadata,
    ...sectionConfigs[section],
  };
};
