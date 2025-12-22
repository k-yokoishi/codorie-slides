const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '..', 'dist')
const slidesDir = path.join(__dirname, '..', 'slides')

// スライド情報を取得
function getSlides() {
  const slides = []
  const entries = fs.readdirSync(slidesDir, { withFileTypes: true })

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const slidePath = path.join(slidesDir, entry.name, 'index.md')
      if (fs.existsSync(slidePath)) {
        // index.mdからタイトルを取得
        const content = fs.readFileSync(slidePath, 'utf-8')
        const titleMatch = content.match(/^#\s+(.+)$/m)
        const title = titleMatch ? titleMatch[1] : entry.name
        slides.push({
          name: entry.name,
          title: title,
          path: `${entry.name}/index.html`,
        })
      }
    } else if (entry.name.endsWith('.md')) {
      const slidePath = path.join(slidesDir, entry.name)
      const content = fs.readFileSync(slidePath, 'utf-8')
      const titleMatch = content.match(/^#\s+(.+)$/m)
      const title = titleMatch ? titleMatch[1] : entry.name.replace('.md', '')
      slides.push({
        name: entry.name.replace('.md', ''),
        title: title,
        path: `${entry.name.replace('.md', '')}.html`,
      })
    }
  })

  return slides
}

// index.htmlを生成
function generateIndex() {
  const slides = getSlides()

  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codorie - スライド集</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Yu Gothic', '游ゴシック', 'Century Gothic', 'Hiragino Sans', 'Meiryo', sans-serif;
      background: #f5f4e8;
      color: #444;
      line-height: 1.6;
      padding: 40px 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 60px;
      padding: 40px 0;
    }

    .logo {
      width: 200px;
      height: 200px;
      margin: 0 auto 30px;
      background-image: url('scratch-workshop/images/codorie-logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    h1 {
      color: #0d945a;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
    }

    .subtitle {
      color: #444;
      font-size: 1.2em;
      letter-spacing: 0.05em;
    }

    .slides-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .slide-card {
      background: #f4f2c3;
      border-radius: 12px;
      padding: 30px;
      text-decoration: none;
      color: #444;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: block;
    }

    .slide-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(13, 148, 90, 0.2);
      background: #f5f4e8;
    }

    .slide-card h2 {
      color: #0d945a;
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
      letter-spacing: 0.05em;
    }

    .slide-card p {
      color: #666;
      font-size: 0.9em;
    }

    .slide-card::after {
      content: '→';
      color: #0d945a;
      font-size: 1.5em;
      float: right;
      margin-top: -30px;
    }

    footer {
      text-align: center;
      margin-top: 60px;
      padding: 40px 0;
      color: #666;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="logo"></div>
      <h1>Codorie - スライド集</h1>
      <p class="subtitle">プログラミングスクール Codorie のスライド資料</p>
    </header>

    <div class="slides-grid">
${slides
  .map(
    (slide) => `      <a href="${slide.path}" class="slide-card">
        <h2>${slide.title}</h2>
        <p>スライドを表示</p>
      </a>`
  )
  .join('\n')}
    </div>

    <footer>
      <p>© 2024 Codorie. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>`

  fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8')
  console.log('Generated index.html')
  console.log(`Found ${slides.length} slide(s):`)
  slides.forEach((slide) => {
    console.log(`  - ${slide.title} (${slide.path})`)
  })
}

generateIndex()
