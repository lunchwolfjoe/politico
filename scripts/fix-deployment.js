const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to the platform page
const platformPagePath = path.join(__dirname, '../src/app/platform/page.tsx');

try {
  console.log('Running deployment fix script...');
  
  // Check if the file exists
  if (!fs.existsSync(platformPagePath)) {
    console.log(`File not found: ${platformPagePath}`);
    console.log('Current directory:', process.cwd());
    console.log('Directory contents:', fs.readdirSync(process.cwd()));
    throw new Error('Platform page not found');
  }
  
  // Read the current file content
  let content = fs.readFileSync(platformPagePath, 'utf8');
  console.log('Original content length:', content.length);
  
  // Replace BuildingIcon with BuildingOfficeIcon in imports
  const importRegex = /(import\s*{[^}]*?)BuildingIcon([^}]*?}\s*from\s*['"]@heroicons\/react\/24\/outline['"])/;
  if (importRegex.test(content)) {
    content = content.replace(importRegex, '$1BuildingOfficeIcon$2');
    console.log('Fixed BuildingIcon in imports');
  } else {
    console.log('BuildingIcon not found in imports, checking full content');
  }
  
  // Replace any remaining BuildingIcon references with BuildingOfficeIcon
  const oldContent = content;
  content = content.replace(/BuildingIcon/g, 'BuildingOfficeIcon');
  
  if (oldContent === content) {
    console.log('No changes made to content');
  } else {
    console.log('Changes made to content');
  }
  
  // Write the updated content back to the file
  fs.writeFileSync(platformPagePath, content, 'utf8');
  console.log('Successfully fixed BuildingIcon references in platform page.');
  
  // Log file information for debugging
  const stats = fs.statSync(platformPagePath);
  console.log('File size after update:', stats.size);
  console.log('File modification time:', stats.mtime);
  
} catch (error) {
  console.error('Error fixing platform page:', error);
  process.exit(1);
} 