const fs = require('fs');
const path = require('path');

// Define source and destination directories
const sourceDir = path.join(process.cwd(), 'Substacks');
const destDir = path.join(process.cwd(), 'public', 'Substacks');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// Copy image files
try {
  // Get all .webp files from the source directory
  const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.webp'));
  
  console.log(`Found ${files.length} .webp files to copy`);
  
  // Copy each file to the destination
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${file}`);
  });
  
  console.log('All Substack images copied successfully to public directory');
} catch (error) {
  console.error('Error copying Substack images:', error);
  process.exit(1);
} 