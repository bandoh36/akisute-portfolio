import { Metadata } from "next";
import TopTemp from "@/components/templates/TopTemp";

export const metadata: Metadata = {
  title: "Akisute's Portfolio Top",
  description:
    "フロントエンドエンジニアあきすてのポートフォリオサイトのトップページです。",
  openGraph: {
    title: "Akisute's Portfolio",
    description:
      "React/Next.js を中心に制作したポートフォリオのトップページです。",
    url: "https://akisute-portfolio.com/",
    siteName: "Akisute's Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://akisute-portfolio.com/",
  },
};

export default function TopPage() {
  return (
    <>
      <TopTemp />
    </>
  );
}
