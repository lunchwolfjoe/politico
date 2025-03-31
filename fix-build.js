const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Search for platform page
function findFile(dir, filename) {
  console.log(`Searching for ${filename} in ${dir}`);
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const found = findFile(filePath, filename);
      if (found) return found;
    } else if (file === filename) {
      return filePath;
    }
  }
  
  return null;
}

try {
  console.log('Running build fix script...');
  console.log('Current directory:', process.cwd());
  
  // Attempt to find the platform page
  let platformPagePath = './src/app/platform/page.tsx';
  
  // Check if the file exists at the expected path
  if (!fs.existsSync(platformPagePath)) {
    console.log(`File not found at expected path: ${platformPagePath}`);
    
    // Try to find it in the src directory
    const srcDir = './src';
    if (fs.existsSync(srcDir)) {
      platformPagePath = findFile(srcDir, 'page.tsx');
      if (platformPagePath) {
        console.log(`Found platform page at: ${platformPagePath}`);
      }
    }
    
    // If still not found, search from the current directory
    if (!platformPagePath) {
      platformPagePath = findFile('.', 'page.tsx');
      if (platformPagePath) {
        console.log(`Found page at: ${platformPagePath}`);
      } else {
        throw new Error('Could not find platform page');
      }
    }
  }
  
  // Read the current file content
  let content = fs.readFileSync(platformPagePath, 'utf8');
  console.log('Original content length:', content.length);
  
  // Check if the file contains BuildingIcon
  if (content.includes('BuildingIcon')) {
    console.log('Found BuildingIcon in file, replacing with BuildingOfficeIcon');
    
    // Replace BuildingIcon with BuildingOfficeIcon in imports
    const importRegex = /(import\s*{[^}]*?)BuildingIcon([^}]*?}\s*from\s*['"]@heroicons\/react\/24\/outline['"])/;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, '$1BuildingOfficeIcon$2');
      console.log('Fixed BuildingIcon in imports');
    }
    
    // Replace any remaining BuildingIcon references
    content = content.replace(/BuildingIcon/g, 'BuildingOfficeIcon');
    
    // Write the updated content back to the file
    fs.writeFileSync(platformPagePath, content, 'utf8');
    console.log('Successfully fixed BuildingIcon references');
  } else {
    console.log('No BuildingIcon references found in the file');
  }
  
  console.log('Build fix script completed successfully');
} catch (error) {
  console.error('Error in build fix script:', error);
  process.exit(1);
} 