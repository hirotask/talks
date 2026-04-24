---
theme: seriph
background: https://cover.sli.dev
title: Slidev のご紹介
class: text-center
drawings:
  persist: false
transition: slide-left
comark: true
---

# Slidev のご紹介

Marp を使ってた私が Slidev に乗り換えた理由

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  はじめる <carbon:arrow-right />
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# 振り返り

2024年11月、私は Marp を使い始めました。
しかし、今は Slidev に乗り換えることを決意しました。

<iframe
  src="https://talks.hirotask.me/2024-11-12/"
  width="800"
  height="400"
  frameborder="0"
></iframe>


---


# Slidevとは？

Slidevは開発者向けに設計されたスライド作成・プレゼンテーションツールで、以下の特徴を持っている。

- **📝 テキストベース** - Markdownで内容に集中し、スタイルは後から整えることができる
- **🎨 テーマ対応** - テーマはnpmパッケージとして共有・再利用が可能
- **🧑‍💻 開発者フレンドリ**ー - コードハイライトや補完付きのライブコーディングに対応している
- **🤹 インタラクティブ** - Vueコンポーネントを埋め込んで表現力を高められる
- **🎥 録画機能** - 録画やカメラ表示が組み込みで利用できる
- **📤 ポータブル** - PDF、PPTX、PNG、さらにはホスティング可能なSPAとして書き出せる
- **🛠 ハッカブル** - WebページでできることはほぼすべてSlidevでも実現可能
<br>
<br>

[公式サイト](https://sli.dev/guide/why)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
glowSpeed: 175
level: 2
---

# Slidev とMarp の違い

<div mt-6 grid grid-cols-2 gap-6>
  <div
    v-click
    border="2 solid blue-400" bg="blue-400/20"
    rounded-lg overflow-hidden
  >
    <div bg="blue-400/40" px-4 py-2 flex items-center>
      <span font-bold>Slidev</span>
    </div>
    <div px-4 py-3 flex flex-col gap-2>
      <div flex items-center gap-2 py-1>
        <div i-carbon:stickies text-amber-300 text-xl />
        <div>
          <div font-bold>設計思想</div>
          <div text-sm opacity-80>Webアプリとしてのスライド（高機能・拡張性重視）</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:color-palette text-amber-300 text-xl />
        <div>
          <div font-bold>カスタマイズ性</div>
          <div text-sm opacity-80>VueやCSSで自由にカスタマイズ可能、テーマもnpmで多く共有</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:code text-amber-300 text-xl />
        <div>
          <div font-bold>開発者向け機能</div>
          <div text-sm opacity-80>ライブコーディング、インタラクティブUI、コンポーネント埋め込み</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:area-custom text-amber-300 text-xl />
        <div>
          <div font-bold>インタラクティブ性</div>
          <div text-sm opacity-80>Vueコンポーネントで動的・インタラクティブな表現が可能</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:expand-all text-amber-300 text-xl />
        <div>
          <div font-bold>拡張性</div>
          <div text-sm opacity-80>ほぼ無制限に拡張可能</div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-click
    border="2 solid green-800" bg="green-800/20"
    rounded-lg overflow-hidden
  >
    <div bg="green-800/40" px-4 py-2 flex items-center>
      <span font-bold>Marp</span>
    </div>
    <div px-4 py-3 flex flex-col gap-2>
      <div flex items-center gap-2 py-1>
        <div i-carbon:stickies text-amber-300 text-xl />
        <div>
          <div font-bold>設計思想</div>
          <div text-sm opacity-80>シンプルなスライド生成ツール</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:color-palette text-amber-300 text-xl />
        <div>
          <div font-bold>カスタマイズ性</div>
          <div text-sm opacity-80>CSSベースでカスタマイズ可能だが、比較的シンプル</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:code text-amber-300 text-xl />
        <div>
          <div font-bold>開発者向け機能</div>
          <div text-sm opacity-80>静的スライドの生成中心、コード表示は可能だが実行はできない</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:area-custom text-amber-300 text-xl />
        <div>
          <div font-bold>インタラクティブ性</div>
          <div text-sm opacity-80>基本的に静的なスライド</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:expand-all text-amber-300 text-xl />
        <div>
          <div font-bold>拡張性</div>
          <div text-sm opacity-80>シンプルさ重視のため拡張性は限定的</div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# インタラクティブなスライド？

---
transition: slide-up
level: 2
---

# Navigation

スライドの右下にカーソルを合わせると、スライドを操作するためのコントロールパネルが表示される

## Keyboard Shortcuts

|                                                     |                             |
| --------------------------------------------------- | --------------------------- |
| <kbd>right</kbd> / <kbd>space</kbd>                 | 次のアニメーション実行 or 次のスライドへ     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | 前のアニメーション実行 or 前のスライドへ|
| <kbd>up</kbd>                                       | 前のスライドへ              |
| <kbd>down</kbd>                                     | 次のスライドへ                  |

<!-- https://sli.dev/guide/animations.html#click-animation -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>

---
layout: two-cols
layoutClass: gap-16
level: 2
---

# Toc
 
`Toc` コンポーネントを使うと、簡単に目次を作成できる

```html
<Toc minDepth="1" maxDepth="1" />
```

::right::

<Toc text-sm minDepth="1" maxDepth="3" />

---
layout: image-right
image: https://cover.sli.dev
level: 2
---

# Code

コードスニペット\`\`\` を使うことで、自動的にコードがハイライトされて、しかもホバーして選択もできる。

```ts [filename-example.ts] {all|4|6|6-7|9|all} twoslash
// TwoSlash enables TypeScript hover information
// and errors in markdown code blocks
// More at https://shiki.style/packages/twoslash
import { computed, ref } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

doubled.value = 2
```

<arrow v-click="[4, 5]" x1="350" y1="310" x2="195" y2="342" color="#953" width="2" arrowSize="1" />

<!-- This allow you to embed external code blocks -->
<<< @/snippets/external.ts#snippet


<!-- Inline style -->
<style>
.footnotes-sep {
  @apply mt-5 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---
level: 3
---

# Shiki Magic Move

[shiki-magic-move](https://shiki-magic-move.netlify.app/)を使用できるので、コードスニペットにアニメーションを仕込むことができる。

複数のコードスニペットを<code>````md magic-move</code> で囲むことで、shiki-magic-move を有効化できる。

````md magic-move {lines: true}
```ts {*|2|*}
// step 1
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
```

```ts {*|1-2|3-4|3-4,8}
// step 2
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
```

```ts
// step 3
export default {
  data: () => ({
    author: {
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
  })
}
```

Non-code blocks are ignored.

```vue
<!-- step 4 -->
<script setup>
const author = {
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
}
</script>
```
````

---
level: 2
---

# Components

<div grid="~ cols-2 gap-4">
<div>

Slidev はスライドの中に直接 Vue コンポーネントを埋め込むことができる

さらに Slidev は `<Tweet/>` や `<Youtube/>` といったコンポーネントを提供。 もちろん、自分で作成したコンポーネントも埋め込める😊

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

---
class: px-20
level: 2
---

# Themes

Slidev は様々なテーマを提供している。Marp は一からテーマを整える必要があったが、 Slidev はめっちゃおしゃれなテーマを提供している。

<div grid="~ cols-2 gap-2" m="t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

---
level: 2
---

# Clicks Animations

`v-click` アトリビュートを加えることで、クリック時のアニメーションを追加できる

<div v-click>


```html
<div v-click>This shows up when you click the slide.</div>
```

</div>

<br>

<v-click>

<code>v-mark</code> は<span v-mark.red="3">手書き風の下線や、</span>

<span v-mark.circle.orange="4">丸を書くアニメーション</span>
を追加できる

```html
<span v-mark.underline.orange>inline markers</span>
```

```html 
<span v-mark.circle.orange="4">丸を書くアニメーション</span>
```
</v-click>

<div mt-20 v-click>

[Learn more](https://sli.dev/guide/animations#click-animation)

</div>

---
level: 2
---

# Motions

[@vueuse/motion](https://motion.vueuse.org/) を使って、モーションアニメーションも定義できます。

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :click-3="{ x: 80 }"
  :leave="{ x: 1000 }"
>
  Slidev
</div>
```

<div class="w-60 relative">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute inset-0"
      src="https://sli.dev/logo-triangle.png"
      alt=""
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 30, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn more](https://sli.dev/guide/animations.html#motion)

</div>

---
level: 2
---

# $\LaTeX$

$\LaTeX$ ももちろんサポートされています。

<div h-3 />

Inline $\sqrt{3x-1}+(1+x)^2$

Block
$$ {1|3|all}
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$

---
layout: center
class: text-center
---

# Learn More

[Documentation](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/resources/showcases)

<PoweredBySlidev mt-10 />

---
layout: center
---

<div text-5xl>Thank you</div>
