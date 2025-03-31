const fs = require('fs');
const path = require('path');

// Path to the platform page
const platformPagePath = path.join(__dirname, '../src/app/platform/page.tsx');

try {
  console.log('Running deployment fix script...');
  
  // Read the current file content
  let content = fs.readFileSync(platformPagePath, 'utf8');
  
  // Replace BuildingIcon with BuildingOfficeIcon
  content = content.replace(/BuildingIcon/g, 'BuildingOfficeIcon');
  
  // Write the updated content back to the file
  fs.writeFileSync(platformPagePath, content, 'utf8');
  
  console.log('Successfully fixed BuildingIcon references in platform page.');
} catch (error) {
  console.error('Error fixing platform page:', error);
  process.exit(1);
} 