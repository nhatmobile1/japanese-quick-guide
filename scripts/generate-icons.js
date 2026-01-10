/**
 * Icon Generator Script
 * Generates PWA icons with the Ghibli Garden sage green color
 *
 * Run with: node scripts/generate-icons.js
 * Requires: npm install canvas
 */

const fs = require('fs');
const path = require('path');

// Check if canvas is available
let createCanvas;
try {
  createCanvas = require('canvas').createCanvas;
} catch (e) {
  console.log('Canvas module not found. Installing...');
  console.log('Run: npm install canvas');
  console.log('\nAlternatively, you can manually create the icons using these specs:');
  console.log('\n--- ICON SPECIFICATIONS ---');
  console.log('Background color: #5B8A72 (Sage Green)');
  console.log('Text: 語 (white, centered)');
  console.log('Font: Noto Sans JP or system Japanese font, Bold');
  console.log('\nSizes needed:');
  console.log('  - favicon-32x32.png (32x32)');
  console.log('  - apple-touch-icon.png (180x180)');
  console.log('  - icon-192x192.png (192x192)');
  console.log('  - icon-512x512.png (512x512)');
  console.log('\nCorner radius: 20% of icon size');
  console.log('----------------------------\n');
  process.exit(0);
}

const SAGE_GREEN = '#5B8A72';
const WHITE = '#FFFFFF';
const CHARACTER = '語';

const sizes = [
  { name: 'favicon-32x32.png', size: 32, fontSize: 20 },
  { name: 'apple-touch-icon.png', size: 180, fontSize: 110 },
  { name: 'icon-192x192.png', size: 192, fontSize: 120 },
  { name: 'icon-512x512.png', size: 512, fontSize: 320 },
];

const outputDir = path.join(__dirname, '../public/japanese-icons');

function generateIcon(size, fontSize, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Draw rounded rectangle background
  const radius = size * 0.2;
  ctx.fillStyle = SAGE_GREEN;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fill();

  // Draw character
  ctx.fillStyle = WHITE;
  ctx.font = `bold ${fontSize}px "Noto Sans JP", "Hiragino Sans", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(CHARACTER, size / 2, size / 2 + fontSize * 0.05);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  const filepath = path.join(outputDir, filename);
  fs.writeFileSync(filepath, buffer);
  console.log(`Generated: ${filename} (${size}x${size})`);
}

// Generate all icons
console.log('Generating icons with Sage Green (#5B8A72)...\n');
sizes.forEach(({ name, size, fontSize }) => {
  generateIcon(size, fontSize, name);
});
console.log('\nDone! Icons saved to public/japanese-icons/');
