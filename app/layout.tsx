import "./globals.css";
import { getDefaultMetadata } from "./seo";

export const metadata = getDefaultMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kayen Protocol",
              url: "https://kayen.org",
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: "https://kayen.org/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              ],
            }),
          }}
        />
        {/* Add SiteNavigationElement structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  position: 1,
                  name: "Trade",
                  description: "Swap or Wrap Fan Tokens on the Kayen Protocol",
                  url: "https://app.kayen.org/trade",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 2,
                  name: "Pools",
                  description: "Explore Kayen's Pools for enhanced trading opportunities",
                  url: "https://app.kayen.org",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 3,
                  name: "Offside",
                  description: "Create your own token or explore existing ones by the community",
                  url: "https://app.kayen.org/offside",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 4,
                  name: "League",
                  description: "Engage in community-driven trading competitions",
                  url: "https://app.kayen.org/league",
                },
              ],
            }),
          }}
        />
        {/* Add BreadcrumbList structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://kayen.org",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Trade",
                  item: "https://app.kayen.org/trade",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Pools",
                  item: "https://app.kayen.org",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Offside",
                  item: "https://app.kayen.org/offside",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "League",
                  item: "https://app.kayen.org/league",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg-main">
        <div className=" text-white font-medium flex flex-col items-center overflow-x-hidden">
          <div className="border-b border-[#272A2A] h-[60px] xl:h-[72px] w-full fixed bg-bg-main" />
          <div
            className="flex flex-col justify-center
                          border-x border-[#272A2A] 
                          2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px]"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
