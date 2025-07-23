export const WORK_CONTENT_PORTFOLIO = {
  title: "Portfolio（当サイト）",
  image: { src: "/img/work/portfolio.jpg", alt: "portfolio" },
  description: [
    "転職活動時に作成していたポートフォリオサイトを、デザインから見直し実装しなおしたものです。",
    "基本的にフロントエンドの知識のみで作成しており、レスポンシブデザインを採用しております。",
    "",
    "SIerではあまりコードを書いていませんでしたが、それでもガッツリ開発するベンチャーに転職できたのは、このようなサイトを作っていたことも要因の一つだと思っています。",
    "せっかく作ったので、アニメーション追加するなど今後も更新します。",
  ],
  link: "",
  modalDescription: {
    front: "JavaScript、TypeScript、React、Next.js、MaterialUI",
    back: "なし",
    infra: "AWSAmplify、CloudFront",
    source: {
      text: "https://github.com/bandoh36/next-ts-app",
      src: "https://github.com/bandoh36/next-ts-app",
    },
    other: [
      "・AWSAmplifyにて、GitHubへのpushを起点に自動ビルド・デプロイされるようにしています。",
      "（元々GithubActionsで自動デプロイさせてましたが、こっちのが断然楽でした。）",
      "",
      "・年齢や社会人歴は都度計算されるようにするなど、できるだけ保守手作業が発生しないようにしてます。",
      "",
      "・StoryBookやJestなど、フロントエンドのテストツールも導入しています。",
      "（興味があり入れているだけで、機能仕様上全く活かしてはいませんが、、）",
    ],
  },
};
