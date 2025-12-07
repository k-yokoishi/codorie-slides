# Marp Slides

Marpでスライドを管理するリポジトリです。

## セットアップ

```bash
npm install
```

## 使い方

### スライドの作成

`slides/`ディレクトリにMarkdownファイル（`.md`）を作成してください。

### スライドのプレビュー

#### 推奨: VS Code拡張機能（最も主流）

1. VS Codeに「Marp for VS Code」拡張機能をインストール
2. Markdownファイルを開く
3. 右上のプレビューボタンをクリック、またはコマンドパレット（`Cmd+Shift+P` / `Ctrl+Shift+P`）で「Marp: Open Preview」を選択

リアルタイムでプレビューが更新され、編集しながら確認できます。

#### CLIでのプレビュー

```bash
npm run preview
```

ブラウザでプレビューが開きます。

#### 開発サーバー

```bash
npm run serve
```

開発サーバーを起動し、ブラウザで確認できます。ファイル変更時に自動でリロードされます。

### スライドのビルド

#### HTMLとして出力
```bash
npm run build
```

#### PDFとして出力
```bash
npm run build:pdf
```

#### PowerPointとして出力
```bash
npm run build:pptx
```

### 開発サーバーを起動

```bash
npm run serve
```

## スライドの書き方

Marpの基本的な書き方：

```markdown
---
marp: true
theme: default
---

# タイトルスライド

---

# スライド2

コンテンツをここに書きます
```

詳細は[Marp公式ドキュメント](https://marp.app/)を参照してください。
