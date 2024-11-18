import "./globals.css";
import { getDefaultMetadata } from "./seo";

export const metadata = getDefaultMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="TamDzN3AE-EJuOQSCjTGkMrNEjBZ3QvVSp6DoTtBRNM" />
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
