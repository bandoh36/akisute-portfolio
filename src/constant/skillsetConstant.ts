export interface Qualification {
  title: string;
  acquiredAt: string;
}

export interface SkillItem {
  name: string;
  summary: string;
  points: string[];
}

export interface SkillSection {
  id: string;
  title: string;
  items: SkillItem[];
}

export const QUALIFICATIONS: Qualification[] = [
  {
    title: "ビジネス実務法務検定試験 3級",
    acquiredAt: "2019年6月",
  },
  {
    title: "日商簿記検定 3級",
    acquiredAt: "2019年6月",
  },
  {
    title: "基本情報技術者試験",
    acquiredAt: "2019年10月",
  },
  {
    title: "応用情報技術者試験",
    acquiredAt: "2020年10月",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    acquiredAt: "2023年4月",
  },
];

export const SKILLSET_SECTIONS: SkillSection[] = [
  {
    id: "front",
    title: "フロントエンド",
    items: [
      {
        name: "HTML / CSS",
        summary: "実務で継続的に利用",
        points: [
          "レスポンシブ対応が可能",
          "保守性を意識したマークアップができる",
          "コンポーネントを踏まえたスタイル設計を意識している",
        ],
      },
      {
        name: "JavaScript / TypeScript",
        summary: "実務で継続的に利用",
        points: [
          "フロントエンド開発で日常的に使用",
          "可読性、型安全性、保守性を意識した実装が可能",
        ],
      },
      {
        name: "React / Next.js",
        summary: "実務で利用中",
        points: [
          "新規開発、既存画面の移行、UI 実装、画面改善、パフォーマンス改善を経験",
          "SSR / SSG / ISR やキャッシュを踏まえた設計を学習・実践中",
        ],
      },
      {
        name: "jQuery",
        summary: "既存システムの保守、改修、移行案件で利用",
        points: [
          "レガシー環境の読み解きや改修に対応可能",
          "モダンフロントエンドへの移行検討にも活かしている",
        ],
      },
    ],
  },
  {
    id: "back",
    title: "バックエンド",
    items: [
      {
        name: "Java",
        summary: "SIer 時代の主力技術",
        points: [
          "業務システム開発、保守開発、設計、実装、テスト、運用保守を経験",
        ],
      },
      {
        name: "Python",
        summary: "副業で利用中",
        points: [
          "AI サービスのバックエンド開発を担当",
          "テキスト生成、音声生成、動画生成に関わる実装経験あり",
        ],
      },
      {
        name: "Node.js / SQL / Linux",
        summary: "基礎的な実装、調査、運用対応が可能",
        points: [
          "API、データ処理、CLI 操作などを通して継続学習中",
        ],
      },
    ],
  },
  {
    id: "infra",
    title: "インフラ / クラウド",
    items: [
      {
        name: "AWS",
        summary: "業務・学習で利用",
        points: [
          "CloudFront / ECS / S3 などの利用経験あり",
          "基礎的な構成理解と運用観点を持っている",
        ],
      },
    ],
  },
  {
    id: "other",
    title: "その他",
    items: [
      {
        name: "Git / GitHub",
        summary: "実務で日常的に利用",
        points: [
          "チーム開発、コードレビュー、ブランチ運用に対応可能",
        ],
      },
      {
        name: "SEO / パフォーマンス改善",
        summary: "現職で継続的に関与",
        points: [
          "表示速度改善や SEO を意識したフロントエンド設計、改善施策の経験あり",
        ],
      },
      {
        name: "AI 駆動開発",
        summary: "日常的に活用",
        points: [
          "GitHub Copilot や Cursor を活用",
          "実装補助、調査、レビュー観点整理、開発生産性向上に活かしている",
        ],
      },
    ],
  },
];
