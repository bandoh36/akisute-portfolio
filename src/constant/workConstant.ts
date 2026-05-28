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
  {
    title: "Myタスク管理アプリ",
    subtitle:
      "学習・運動・予定・目標・TODO を一元管理し、継続をゲーム体験に変える Electron デスクトップアプリ",
    image: { src: "/img/work/todo.png", alt: "my task management app" },
    description: [
      "学習記録、筋トレ、予定、目標、TODO を 1 つのデスクトップアプリで管理し、日々の行動を RPG 的に可視化する個人開発アプリです。",
      "単なる CRUD ツールではなく、EXP、レベル、ストリーク、デイリークエスト、週次レポートまで実装し、継続のモチベーション設計も含めてプロダクトとして設計しています。",
      "Electron の Main / Preload / Renderer を分離し、IPC 経由で安全にデータ更新を行う構成にしており、ローカル JSON 永続化によるローカルファーストな使い勝手も重視しています。",
    ],
    link: "",
    modalDescription: {
      front: "TypeScript、React、react-router-dom、Tailwind CSS",
      back: "Electron Main Process、IPC、ローカル JSON ストア",
      infra: "Electron、electron-builder、Vite、vite-plugin-electron",
      source: {
        text: "",
        src: "",
      },
      other: [
        "・Renderer / Preload / Main を分離し、Preload で公開した API 経由のみで永続化やネイティブ連携を行う設計です。",
        "・ゲーミフィケーションのロジックを UI から分離し、保守しやすい構成を意識しています。",
      ],
    },
  },
  {
    title: "TIL（学習アウトプット）",
    subtitle:
      "日々の学びを commit ベースで蓄積し、継続的にアウトプットしている学習ログリポジトリ",
    description: [
      "日々学んだことを記録し、学習内容を継続的にアウトプットしているリポジトリです。",
      "単なるメモではなく、調べた内容や理解したことを自分の言葉で整理し、commit ベースで積み上げることで、学習習慣と継続力が伝わる形を意識しています。",
      "業務外でも技術理解を深めながら言語化する習慣があり、キャッチアップ力や自走力の補強材料としてポートフォリオに載せています。",
    ],
    link: "",
    modalDescription: {
      front: "Markdown、GitHub",
      back: "なし",
      infra: "Git / GitHub",
      source: {
        text: "https://github.com/bandoh36/TIL",
        src: "https://github.com/bandoh36/TIL",
      },
      other: [
        "・学習内容をその場限りにせず、継続的な記録として残す運用を続けています。",
        "・技術のインプットだけでなく、整理してアウトプットする習慣自体をアピールできる題材です。",
      ],
    },
  },
];
