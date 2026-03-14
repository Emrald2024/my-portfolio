const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images/marketing');
const outputDir = path.join(__dirname, 'public/images/marketing/webp');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.svg')) {
    const name = path.basename(file, '.svg');
    sharp(path.join(inputDir, file))
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${name}.webp`))
      .then(() => console.log(`Converted ${file}`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
