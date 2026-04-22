---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
title: Marpを初めて触って感じた良いところ、悪いところ
paginate: true
---

# Marpを初めて触って感じた<br />良いところ、悪いところ

## 波紫 寛斗

---

# Marpってなに？

<div class="grid grid-cols-[1fr_320px] gap-8 items-center">
<div>

- Markdownを使ったプレゼンテーションのエコシステム
- CSS や SCSS でデザインを適用できる
- HTML, PDF, PowerPoint などの各種形式でエクスポートすることができる
- OSSである。ライセンスは MIT
- [ここ](https://github.com/marp-team) にコードは公開されている

</div>

<div class="flex justify-center">
  <img src="/marp.png" class="max-w-full max-h-80 object-contain" />
</div>
</div>

---

<div class="h-full flex flex-col items-center justify-center text-center">

# 要するに

# Markdownでスライド作れるすげーやつ

</div>

---

# 良いところ

- Markdown で書ける
  - （大半のエンジニアは Markdown 好きだと思ってる。え？そうでもない・・・？）
- レイアウトがページによって若干ずれる、みたいなことがない
- 数式が使える
- スライドを Git 管理できる
- Qiita や Zenn で Markdown で書いた記事を、楽にスライドにすることができる

---

# 悪いところ

- レイアウトの調整がめんどくさい
  - タイトルの文字の大きさ
  - 画像の大きさ、表示位置
  - CSS 苦手な私には少し大変だった
- 画像の複雑な配置が特にめんどくさい
  - 画像編集ソフトとかで複数の画像を一枚の画像にしてデメリットをカバーできるけど、その画像編集もちょっとめんどう

---

# まとめ

- 以下のような場合に Marp を使ってスライドを作った方が良さそう
  - 数式を使う場合
  - アカデミックな場面
  - Qiita や Zenn などの技術ブログの記事をスライドにしたい場合
- 逆に以下のような場合では、Marp よりも Google スライドとかの方が良さそう
  - 画像や動画多めのプレゼンをしたい場合（いらすとや沢山使う時とか）
  - ド派手なデザインでプレゼンしたい場合

