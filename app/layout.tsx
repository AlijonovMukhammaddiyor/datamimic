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
              name: "DataMimic",
              url: "https://datamimic.ai",
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: "https://datamimic.ai/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="bg-bg-main font-sans"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" text-white font-medium flex flex-col items-center overflow-x-hidden">
          <div
            className="flex flex-col justify-center 
                          2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px]"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
