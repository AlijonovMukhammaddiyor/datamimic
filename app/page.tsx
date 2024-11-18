import { Metadata } from "next";
import { getDefaultMetadata } from "./seo";
import { HomeComponent } from "@/components/HomeComponent";

export const metadata: Metadata = {
  ...getDefaultMetadata(),
  alternates: {
    canonical: "https://kayen.org",
  },
};

export default function Home() {
  return <HomeComponent />;
}
