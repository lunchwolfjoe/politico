const fs = require('fs');
const path = require('path');

try {
  console.log('Running platform page replacement script...');
  
  // Paths to the source and target files
  const fixedPlatformPagePath = path.join(__dirname, '../src/app/platform/fixed-page.tsx');
  const platformPagePath = path.join(__dirname, '../src/app/platform/page.tsx');
  
  // Check if both files exist
  if (!fs.existsSync(fixedPlatformPagePath)) {
    console.error(`Fixed platform page not found at: ${fixedPlatformPagePath}`);
    process.exit(1);
  }
  
  if (!fs.existsSync(platformPagePath)) {
    console.error(`Target platform page not found at: ${platformPagePath}`);
    process.exit(1);
  }
  
  // Read the fixed platform page content
  const fixedContent = fs.readFileSync(fixedPlatformPagePath, 'utf8');
  
  // Write it to the regular platform page
  fs.writeFileSync(platformPagePath, fixedContent, 'utf8');
  
  console.log('Successfully replaced platform page with fixed version.');
} catch (error) {
  console.error('Error replacing platform page:', error);
  process.exit(1);
} 