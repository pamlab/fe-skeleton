fe-skeleton
==========

フロントエンド作業の骨組みです。

![image.png](https://raw.githubusercontent.com/pamlab/fe-skeleton/images/image.png)

Features
--------

`src/css`の中のsassを色々やって`css`フォルダへ排出。

- sassのコンパイル
- ベンダープレフィックスの付与
- プロパティの並び替え
- 整形

Structure
---------

```bash
.
├── gulpfile.js       # Gulp tasks
├── package.json      # Set Node modules
├── src
│   ├── css
│       ├── xxx.scss  # Input styles
└── css
    ├── xxx.css       # Output styles
```

Usage
-----

### SetUp

1. [ダウンロード](https://github.com/pamlab/fe-skeleton/releases)したファイルをプロジェクトルートへ配置
2. `Shift + 右クリック` でコンテキストメニューを開き、「コマンドプロンプトをここで開く」を選択
3. `npm install` を入力し、モジュールのインストールが完了するのを待つ
4. `npm install gulp -g` を入力し、gulpのグローバルインストールが完了するのを待つ（初回のみ）

### Start

1. `Shift + 右クリック` でコンテキストメニューを開き、「コマンドプロンプトをここで開く」を選択
2. `gulp` を入力し、scssファイルの監視を開始
3. scssファイルを編集し、保存後正しくcssへコンパイルされていることを確認
