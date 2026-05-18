export const WORK_CONTENTS = [
  {
    title: "Portfolio（当サイト）",
    subtitle: "転職活動向けに継続改善している自己紹介・実績紹介サイト",
    image: { src: "/img/work/portfolio.jpg", alt: "portfolio" },
    description: [
      "転職活動時に作成したポートフォリオサイトをベースに、デザインや構成を見直しながら継続的に改善しているサイトです。",
      "自己紹介、経歴、スキル、制作物を整理し、現在の経験や強みが伝わるように設計しています。",
      "静的エクスポート前提で構成し、AWS Amplify による自動デプロイで運用しています。",
    ],
    link: "",
    modalDescription: {
      front: "TypeScript、React、Next.js、Tailwind CSS、framer-motion",
      back: "なし",
      infra: "AWS Amplify、CloudFront",
      source: {
        text: "https://github.com/bandoh36/next-ts-app",
        src: "https://github.com/bandoh36/next-ts-app",
      },
      other: [
        "・ポートフォリオの内容を継続的に更新し、自己紹介、経歴、スキル、制作物を整理して発信しています。",
        "・静的エクスポート前提で構成し、AWS Amplify を使って GitHub 連携の自動ビルド・デプロイを行っています。",
        "",
        "・年齢や社会人歴は都度計算されるようにし、できるだけ保守手作業が発生しない構成を意識しています。",
        "",
        "・UI 改善やアニメーション追加などを通して、見せ方も含めて継続的にブラッシュアップしています。",
      ],
    },
  },
];
