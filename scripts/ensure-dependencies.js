const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running dependency check script...');

// Check if Supabase module exists
const supabasePath = path.join(
  process.cwd(),
  'node_modules',
  '@supabase',
  'supabase-js'
);

const packageJsonPath = path.join(
  process.cwd(),
  'package.json'
);

try {
  if (!fs.existsSync(supabasePath)) {
    console.log('@supabase/supabase-js module not found, installing...');
    
    // Get the version from package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const supabaseVersion = packageJson.dependencies['@supabase/supabase-js'] || '^2.49.4';
    
    // Install the dependency
    execSync(`npm install @supabase/supabase-js@${supabaseVersion}`, {
      stdio: 'inherit',
    });
    
    console.log('@supabase/supabase-js installed successfully');
  } else {
    console.log('@supabase/supabase-js already installed');
  }
} catch (error) {
  console.error('Error installing dependencies:', error);
  process.exit(1);
}

console.log('Dependency check completed successfully'); 