const https = require('https');

const BASE_URL = 'https://politico-1s3afrifs-nick-plumbs-projects.vercel.app';

// Test GET endpoint
console.log('Testing GET endpoint...');
https.get(`${BASE_URL}/api/volunteer`, (res) => {
  console.log('GET Status:', res.statusCode);
  console.log('GET Headers:', res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('GET Response:', data);
  });
}).on('error', (err) => {
  console.error('GET Error:', err.message);
});

// Test POST endpoint
console.log('\nTesting POST endpoint...');
const postData = JSON.stringify({
  name: 'Test User',
  email: 'test@example.com',
  phone: '1234567890',
  interests: ['Canvassing', 'Phone Banking'],
  availability: 'Weekends',
  message: 'Test message'
});

const options = {
  hostname: 'politico-1s3afrifs-nick-plumbs-projects.vercel.app',
  path: '/api/volunteer',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log('POST Status:', res.statusCode);
  console.log('POST Headers:', res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('POST Response:', data);
  });
});

req.on('error', (err) => {
  console.error('POST Error:', err.message);
});

req.write(postData);
req.end(); 