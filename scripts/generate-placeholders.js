const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Placeholder image configurations
const placeholders = [
  {
    filename: 'candidate.jpg',
    width: 800,
    height: 1200,
    backgroundColor: '#1e3a8a', // blue-900
    text: 'Candidate Photo',
  },
  {
    filename: 'about-profile.jpg',
    width: 600,
    height: 800,
    backgroundColor: '#1e3a8a',
    text: 'Profile Photo',
  },
  {
    filename: 'family.jpg',
    width: 1200,
    height: 800,
    backgroundColor: '#1e3a8a',
    text: 'Family Photo',
  },
];

function generatePlaceholder(config) {
  const canvas = createCanvas(config.width, config.height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = config.backgroundColor;
  ctx.fillRect(0, 0, config.width, config.height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(config.text, config.width / 2, config.height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, config.filename), buffer);
  console.log(`Generated: ${config.filename}`);
}

// Generate all placeholders
placeholders.forEach(generatePlaceholder); 