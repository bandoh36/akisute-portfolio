# akisute-portfolio

`akisute-portfolio` は、あきすてさんのポートフォリオサイトです。  
Next.js App Router をベースに、トップ演出ページから `/home` へ遷移し、プロフィール・経歴・スキル・制作物をタブで切り替えて閲覧できる構成になっています。

## 技術スタック

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- framer-motion

## 画面構成

- `/`
  - `TopTemp` を表示するトップページ
  - 約6秒の演出後、`/home` へ自動遷移
- `/home`
  - `HomeTemp` を表示するメインページ
  - `Profile` / `History` / `Skillset` / `Work` の4タブで構成
  - 季節に応じた背景アニメーションを表示

## 主なディレクトリ

- `src/app`
  - App Router のページ定義
- `src/components/templates`
  - ページ全体を組み立てるテンプレートコンポーネント
- `src/components/organisms`
  - タブ、背景、各コンテンツなどの主要 UI
- `src/components/organisms/content`
  - 各タブの表示内容
- `src/components/organisms/Season`
  - 春夏秋冬ごとの背景表現
- `src/constant`
  - プロフィール文言、スキル一覧、制作実績データ
- `src/lib/common`
  - 年齢・社会人歴などの小さな共通ロジック

## 開発メモ

- パスエイリアスとして `@/` を使用します。
- テキストや掲載情報の変更は、まず `src/constant` 配下を確認してください。
- アニメーションや画面遷移は `framer-motion` とクライアントコンポーネントで構成されています。
- `next.config.ts` では `output: "export"` を指定しており、静的エクスポート前提です。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## デプロイ

AWS Amplify 用の設定は `amplify.yml` にあります。  
ビルドでは `npm ci` と `npm run build` を実行し、生成された `.next` を成果物として扱います。

## Cursor / AI エージェント向け

Cursor 用の永続ルールは `.cursor/rules/` 配下に配置しています。

- `project-overview.mdc`
  - プロジェクト全体の概要と共通前提
- `component-editing.mdc`
  - `src/components/**/*.tsx` 編集時の基本方針
- `content-data-sources.mdc`
  - `src/constant/**/*.ts` 更新時の参照先
- `app-router-metadata.mdc`
  - `src/app/**/*.tsx` 編集時のルーティング・メタデータ方針
- `season-backgrounds.mdc`
  - 季節背景アニメーション編集時の注意

Cursor 上で AI がこのリポジトリを扱う際の共通前提として使えるようにしています。
