const fs = require('fs');
const path = require('path');

const assetDir = path.join(__dirname, '..', 'public', 'assets');
const htmlLogo = path.join(assetDir, 'integris-creative-logo-dark.html');
const svgLight = path.join(assetDir, 'integris-creative-mark-light.svg');
const svgDest = path.join(assetDir, 'integris-creative-mark.svg');

if (!fs.existsSync(assetDir)) {
  throw new Error(`Asset directory not found: ${assetDir}`);
}

if (fs.existsSync(htmlLogo)) {
  const html = fs.readFileSync(htmlLogo, 'utf8');
  const match = html.match(/data:image\/png;base64,([^"']+)/);
  if (!match) {
    throw new Error('No base64 PNG found in integris-creative-logo-dark.html');
  }
  const png = Buffer.from(match[1], 'base64');
  fs.writeFileSync(path.join(assetDir, 'integris-creative-logo-dark.png'), png);
  console.log('Wrote integris-creative-logo-dark.png');
}

if (fs.existsSync(svgLight)) {
  fs.copyFileSync(svgLight, svgDest);
  console.log('Copied integris-creative-mark-light.svg to integris-creative-mark.svg');
}

['integris-creative-logo-dark.html', 'integris-creative-mark.html']
  .filter(name => fs.existsSync(path.join(assetDir, name)))
  .forEach(name => {
    fs.unlinkSync(path.join(assetDir, name));
    console.log(`Removed ${name}`);
  });

console.log('Asset repair complete.');
