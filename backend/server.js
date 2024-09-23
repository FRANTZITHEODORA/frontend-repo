const express = require('express');
const cors = require('cors');
const app = express();

// Ρύθμιση CORS
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? 'https://myapp.herokuapp.com'
    : 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
};

app.use(cors(corsOptions));

// Route για το root '/'
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// Route για το '/api/data'
app.get('/api/data', (req, res) => {
  res.json({
    "name": "FRANTZI THEODORA",
    "jobTitle": "Junior Web Developer",
    "diploma": "Diploma in IT - DATALABS",
    "phone": "123-456-7890",
    "email": "frantzi@example.com",
    "location": "Thessaloniki, Greece",
    "github": "https://github.com/frantzi",
    "linkedin": "https://linkedin.com/in/frantzi",
    "codeLink": "https://frantzi.dev",
    "image": "https://via.placeholder.com/150",
    "skills": {
      "Web Development": ["HTML", "CSS", "JavaScript", "PHP", "Python", "Java", "C#", "Wordpress", "WooCommerce", "Android Studio"],
      "UX/UI Design": ["Figma", "Photoshop", "Illustrator", "HTML & CSS", "Canva"],
      "Other Skills": ["ERP Systems (Singular, Pylon, Galaxy)", "Digital Marketing (Google Ads, Meta Business Suite, Social Media)", "Language: English"]
    },
    "studies": [
      {
        "degree": "Diploma in IT",
        "institution": "DATALABS"
      },
      {
        "degree": "Library and Information Systems",
        "institution": "DIPAE"
      }
    ],
    "bio": "I am a Junior Web Developer (Diploma in IT Datalabs), with a great willingness to work and implement more projects..."
  });
});

// Χρήση δυναμικού port από το Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
