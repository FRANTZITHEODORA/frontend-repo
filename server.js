const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Αντίστοιχα με το frontend
  credentials: true
}));

app.get('/api/data', (req, res) => {
  res.json({
    name: "FRANTZI THEODORA",
    jobTitle: "Junior Web Developer",
    diploma: "Diploma in IT - DATALABS",
    phone: "123-456-7890",
    email: "frantzi@example.com",
    location: "Thessaloniki, Greece",
    github: "https://github.com/frantzi",
    linkedin: "https://linkedin.com/in/frantzi",
    codeLink: "https://frantzi.dev",
    image: "https://via.placeholder.com/150",
    skills: {
      "Web Development": ["HTML", "CSS", "JavaScript", "PHP", "Python", "Java", "C#", "Wordpress", "WooCommerce", "Android Studio"],
      "UX/UI Design": ["Figma", "Photoshop", "Illustrator", "HTML & CSS", "Canva"],
      "Other Skills": ["ERP Systems (Singular, Pylon, Galaxy)", "Digital Marketing (Google Ads, Meta Business Suite, Social Media)", "Language: English"]
    },
    studies: [
      { degree: "Diploma in IT", institution: "DATALABS" },
      { degree: "Library and Information Systems", institution: "DIPAE" }
    ],
    bio: "I am a Junior Web Developer (Diploma in IT Datalabs), with a great willingness to work and implement more projects..."
  });
});

const PORT = process.env.PORT || 5000; // Θύρα 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});