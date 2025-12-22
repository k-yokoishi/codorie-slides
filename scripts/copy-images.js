const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '..', 'slides');
const distDir = path.join(__dirname, '..', 'docs');

// slidesディレクトリ内の各スライドディレクトリを確認
function copyImages() {
  const slides = fs.readdirSync(slidesDir, { withFileTypes: true });

  slides.forEach(slide => {
    if (slide.isDirectory()) {
      const slideImagesDir = path.join(slidesDir, slide.name, 'images');
      const distSlideDir = path.join(distDir, slide.name);

      // imagesディレクトリが存在するか確認
      if (fs.existsSync(slideImagesDir)) {
        const distImagesDir = path.join(distSlideDir, 'images');

        // dist配下のディレクトリが存在しない場合は作成
        if (!fs.existsSync(distSlideDir)) {
          fs.mkdirSync(distSlideDir, { recursive: true });
        }

        // imagesディレクトリをコピー
        if (fs.existsSync(distImagesDir)) {
          fs.rmSync(distImagesDir, { recursive: true, force: true });
        }

        fs.cpSync(slideImagesDir, distImagesDir, { recursive: true });
        console.log(`Copied images from ${slide.name}/images to docs/${slide.name}/images`);
      }
    }
  });
}

copyImages();
