# Marp Slides

Marpでスライドを管理するリポジトリです。

## セットアップ

```bash
npm install
```

## 使い方

### スライドの作成

`slides/`ディレクトリにMarkdownファイル（`.md`）を作成してください。

#### ディレクトリ構成

複数のスライド資料を管理しやすくするため、各スライドごとにディレクトリを作成する構成を推奨します：

```
slides/
  scratch-experience/
    index.md          # スライドのメインファイル
    images/           # このスライド専用の画像ディレクトリ
  another-slide/
    index.md
    images/
      ...
```

この構成により、各スライドの画像を整理して管理できます。スライド内で画像を参照する際は、以下のように記述します：

```markdown
![説明](images/slide-image.png)
```

または：

```markdown
![説明](./images/slide-image.png)
```

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
