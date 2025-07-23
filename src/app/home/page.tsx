import { Metadata } from "next";
import HomeTemp from "@/components/templates/HomeTemp";

export const metadata: Metadata = {
  title: "Akisute's Portfolio",
  description:
    "フロントエンドエンジニアあきすてのポートフォリオサイトです。React/Next.js を中心に制作したWebページなどを掲載しています。",
  openGraph: {
    title: "Akisute's Portfolio",
    description: "React/Next.js を中心に制作したポートフォリオです。",
    url: "https://akisute-portfolio.com/",
    siteName: "Akisute's Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://akisute-portfolio.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeTemp />
    </>
  );
}
