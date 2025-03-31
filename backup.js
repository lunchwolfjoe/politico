// backup.js - Script to create a backup of the project

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create a backup directory if it doesn't exist
const backupDir = path.join(__dirname, 'backups');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Create a timestamp for the backup filename
const now = new Date();
const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;

// Create a filename for the backup
const backupFilename = path.join(backupDir, `v1.0_Last_Local_Version_${timestamp}.zip`);

// Create a file to stream archive data to
const output = fs.createWriteStream(backupFilename);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log(`Backup created successfully: ${backupFilename}`);
  console.log(`Total size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
});

// Handle warnings and errors
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn('Warning during backup:', err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Files and directories to exclude from the backup
const excludes = [
  'node_modules',
  '.next',
  'backups',
  '.git',
  '.gitignore',
  'package-lock.json',
  'backup.js'
];

// Function to check if a file/directory should be excluded
const shouldExclude = (filePath) => {
  return excludes.some(exclude => filePath.includes(exclude));
};

// Function to recursively add files to the archive
const addDirectoryToArchive = (dirPath, archivePath = '') => {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const relativePath = path.join(archivePath, file);
    
    if (shouldExclude(filePath)) {
      continue;
    }
    
    if (fs.statSync(filePath).isDirectory()) {
      addDirectoryToArchive(filePath, relativePath);
    } else {
      archive.file(filePath, { name: relativePath });
    }
  }
};

// Add the project directory to the archive
addDirectoryToArchive(__dirname);

// Finalize the archive
archive.finalize(); 