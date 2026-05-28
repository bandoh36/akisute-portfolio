# akisute-portfolio

転職活動向けに継続改善しているポートフォリオサイトです。  
自己紹介、経歴、スキル、制作物を 1 ページの縦スクロール構成でまとめ、現在の経験や強みが伝わるように設計しています。

## Overview

このプロジェクトでは、以下の内容を掲載しています。

- `PROFILE`
  フロントエンドを主軸にした担当領域、これまでの経験、現在の強み
- `CAREER`
  保険系 SIer と自社サービス開発の 2 社分の経歴要約
- `SKILLS`
  実務・副業・個人開発を含む技術スタック、資格、AI ツール活用
- `WORKS`
  ポートフォリオ本体、My タスク管理アプリ、TIL などのアウトプット

## Tech Stack

- Framework: `Next.js 15` (App Router)
- Language: `TypeScript`
- UI: `React 19`
- Styling: `Tailwind CSS 4`
- Animation: `framer-motion`
- Icons: `react-icons`
- Deploy: `AWS Amplify`

## Main Content Sources

掲載内容の多くは `src/constant` 配下で管理しています。

- `src/constant/profileConstant.ts`
  プロフィール、自己紹介、サマリーカード
- `src/constant/historyConstant.ts`
  経歴セクションの表示内容
- `src/constant/skillsetConstant.ts`
  スキル、資格、AI ツール活用の内容
- `src/constant/workConstant.ts`
  制作物一覧とリンク情報

## UI Structure

- `src/components/templates/HomeTemp.tsx`
  `/home` の全体構成、ヒーロー、セクション配置、スクロール連動
- `src/components/organisms/content/*`
  `Profile` `History` `Skillset` `Work` の各表示コンポーネント
- `src/components/organisms/SeasonBackground.tsx`
  背景演出
- `src/components/organisms/NavigationTab.tsx`
  ページ内ナビゲーション

## Works

現在の `WORKS` セクションには主に以下を掲載しています。

- `Portfolio（当サイト）`
  このポートフォリオ自体。構成や見せ方を継続的に改善
- `Myタスク管理アプリ`
  Electron + React + TypeScript による自己管理デスクトップアプリ
- `TIL（学習アウトプット）`
  学習内容を commit ベースで蓄積しているリポジトリ

## Development

開発サーバーの起動:

```bash
npm run dev
```

本番ビルド確認:

```bash
npm run build
```

ローカルでは `http://localhost:3000` で確認できます。

## Notes

- `/` から `/home` へ遷移する構成です。
- 表示内容は UI コンポーネントに直接書かず、できるだけ `src/constant` 側で管理しています。
- `WORKS` のリンクは、`src/constant/workConstant.ts` の `link` または `modalDescription.source` に URL を入れると表示されます。
- バックエンドがない制作物では、`WorkCard` 側で `バックエンド` 項目が非表示になります。

## Deployment

本プロジェクトは静的エクスポート前提で構成しており、`AWS Amplify` でデプロイしています。
