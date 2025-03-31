const fs = require('fs');
const path = require('path');
const https = require('https');
const { createWriteStream } = require('fs');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image configurations
const images = {
  // Platform Page Images
  'platform-hero.jpg': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
  'fiscal.jpg': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
  'economy.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  'safety.jpg': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  'infrastructure.jpg': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80',
  'education.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
  'healthcare.jpg': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80',
  'platform-cta.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',

  // Volunteer Page Images
  'volunteer-hero.jpg': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',
  'digital-volunteer.jpg': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
  'phone-banking.jpg': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
  'event-planning.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
  'veteran-outreach.jpg': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  'tech-advisory.jpg': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
  'volunteer-impact.jpg': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',

  // News Page Images
  'news-hero.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
  'digital-platform.jpg': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
  'veteran-leadership.jpg': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  'town-hall.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
  'tech-endorsement.jpg': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
  'cybersecurity.jpg': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
  'community-tech.jpg': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80',

  // Contact Page Images
  'contact-hero.jpg': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
  'contact-office.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  'contact-phone.jpg': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
  'contact-email.jpg': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
};

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  const promises = Object.entries(images).map(([filename, url]) => 
    downloadImage(url, filename)
  );

  try {
    await Promise.all(promises);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Run the download
downloadAllImages(); 