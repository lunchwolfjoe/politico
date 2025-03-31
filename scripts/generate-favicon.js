const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the scripts directory exists
const scriptsDir = path.join(__dirname);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// Function to generate favicon.ico
async function generateFavicon() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(path.join(__dirname, '../src/app/favicon.svg'));
    
    // Generate favicon.ico
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(__dirname, '../src/app/favicon.ico'));
    
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

// Run the generation
generateFavicon(); 