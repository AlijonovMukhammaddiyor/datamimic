import { Metadata } from "next";

const BASE_URL = "https://kayen.org";

export const getDefaultMetadata = (): Metadata => ({
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DataMimic | Data Collection for Humanoid Robots",
    template: "%s | DataMimic",
  },
  description:
    "DataMimic provides turnkey data solutions for humanoid robotics, relieving robot companies and research labs of the time-consuming burden of data collection so your team can focus on AI innovation.",
  keywords: ["DataMimic", "Data Collection", "Humanoid Robotics", "Robot Companies", "Research Labs", "AI Innovation"],
  openGraph: {
    type: "website",
    title: "DataMimic | Data Collection for Humanoid Robots",
    description:
      "DataMimic provides turnkey data solutions for humanoid robotics, relieving robot companies and research labs of the time-consuming burden of data collection so your team can focus on AI innovation.",
    url: BASE_URL,
    siteName: "DataMimic",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataMimic | Data Collection for Humanoid Robots",
    description:
      "DataMimic provides turnkey data solutions for humanoid robotics, relieving robot companies and research labs of the time-consuming burden of data collection so your team can focus on AI innovation.",
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
      title: "Trade | DataMimic",
      description: "Swap or provide liquidity for Fan Tokens on the DataMimic.",
      alternates: {
        canonical: "https://app.datamimic.ai/trade",
      },
    },
    pools: {
      title: "Pools | DataMimic",
      description: "Provide liquidity and earn rewards on the DataMimic",
      alternates: {
        canonical: "https://app.datamimic.ai",
      },
    },
    offside: {
      title: "Offside | DataMimic",
      description: "Explore DataMimic's Offside feature for advanced trading.",
      alternates: {
        canonical: "https://app.datamimic.ai/offside",
      },
    },
    league: {
      title: "League | DataMimic",
      description: "Join DataMimic's League for enhanced trading opportunities.",
      alternates: {
        canonical: "https://app.datamimic.ai/league",
      },
    },
  };

  return {
    ...baseMetadata,
    ...sectionConfigs[section],
  };
};
