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
        summary: "Web アプリケーション開発で継続的に利用",
        points: [
          "保守性や構造を意識したマークアップが可能",
          "レスポンシブ対応や画面設計を踏まえたスタイリング経験あり",
        ],
      },
      {
        name: "TypeScript / JavaScript",
        summary: "業務で継続的に利用",
        points: [
          "型安全性と保守性を意識したフロントエンド実装が可能",
          "既存コード読解やリファクタリングにも対応",
        ],
      },
      {
        name: "React / Next.js",
        summary: "業務・副業で継続利用",
        points: [
          "新規開発、既存画面移行、SSR / SSG / ISR を活用した画面開発を経験",
          "パフォーマンス改善、SEO 対策、UI/UX 改善、LPO 施策を推進",
        ],
      },
      {
        name: "jQuery",
        summary: "既存システムの改修・移行案件で利用",
        points: [
          "既存資産の読解、機能追加、移行時の仕様把握に活用",
          "PHP ベース画面の Next.js 移行案件で実務経験あり",
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
        summary: "4年 / SIer 時代の主力技術",
        points: [
          "業務システム開発において設計、実装、テスト、保守運用まで一貫して経験",
          "保険系システム開発での実務経験あり",
        ],
      },
      {
        name: "PHP",
        summary: "2年 / 既存システム改修・移行で利用",
        points: [
          "既存コードの読解を踏まえた機能改修や画面側との連携実装が可能",
        ],
      },
      {
        name: "Python",
        summary: "2年 / 副業開発で利用",
        points: [
          "AI サービス開発におけるバックエンド実装を担当",
          "既存コードの読解、改修、周辺機能追加に対応可能",
        ],
      },
      {
        name: "SQL",
        summary: "4年 / 業務システム開発・保守で利用",
        points: [
          "要件に応じた SQL 作成、データ調査、障害対応時の確認作業が可能",
        ],
      },
      {
        name: "Node.js / Nest.js",
        summary: "API 連携や周辺実装で利用",
        points: [
          "フロントエンド移行案件や新サービス移行に関連する API 置き換えの理解あり",
        ],
      },
      {
        name: "Linux / Shell",
        summary: "運用・保守、開発支援で利用",
        points: [
          "RedHat 系環境での操作やシェル利用を伴う実務経験あり",
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
        summary: "3年 / 業務で継続利用",
        points: [
          "CloudFront / ECS / S3 を用いた構成での開発・運用に関与",
          "配信構成やホスティングを踏まえたフロントエンド開発経験あり",
        ],
      },
      {
        name: "GCP",
        summary: "3年 / 副業・個人開発で利用",
        points: [
          "Cloud Run / GCS / VM を用いたアプリ運用やバッチ実行を経験",
          "AI 生成系サービスのサーバ構築経験あり",
        ],
      },
      {
        name: "Firebase",
        summary: "2年 / 副業・個人開発で利用",
        points: [
          "認証、データ保存などの基本機能を用いたアプリ開発経験あり",
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
        summary: "4年 / チーム開発で継続利用",
        points: [
          "ブランチ運用、Pull Request ベースの開発、コードレビューに対応可能",
        ],
      },
      {
        name: "SEO / パフォーマンス改善",
        summary: "現職で継続的に関与",
        points: [
          "PageSpeed 改善、構造化データ対応、キャッシュ戦略設計などを経験",
        ],
      },
      {
        name: "Sentry / microCMS / Jira",
        summary: "運用・チーム開発で利用",
        points: [
          "Sentry による監視導入、microCMS のスキーマ設計、Jira を用いた進捗管理を経験",
        ],
      },
      {
        name: "Electron",
        summary: "2年 / 副業・個人開発で利用",
        points: [
          "音声入力や動画再生を含むデスクトップアプリ開発経験あり",
        ],
      },
      {
        name: "AI ツール",
        summary: "2年 / 実務・個人開発で活用",
        points: [
          "実務では GitHub Copilot を活用し、実装補助やレビュー観点整理、開発効率向上に活かしている",
          "個人開発・副業では Cursor も活用し、要件整理、既存コード解析、リファクタリング、実装支援に取り組んでいる",
        ],
      },
    ],
  },
];
