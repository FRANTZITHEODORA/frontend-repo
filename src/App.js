import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import myImage from './gth.png';
import downloadImage from './download.png';
import CV from './cv frantzi (2).zip';
import ME from './ME.jpg';
import SM from './social-media.png';
import gth from './gth.png';
import location from './location.png';
import contact from './customer-service.png';
import mail from './mail.png';
import phone from './phone-call.png';
import imPr1 from './imPr1.jpg';
import imPr2 from './imPr2.jpg';
import imPr2m from './imPrm2.jpg';
import imPr3 from './imgPr3.jpg';
import imPr4 from './imPr4.jpg';
import imPr5 from './imPr5.jpg';
import imPr6 from './imPr6.jpg';
import { Carousel } from 'react-bootstrap';
import Navigation from './components/Navigation';

const cors = require('cors');

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://backend-repo-production-cb1a.up.railway.app/api/data'
    : 'http://localhost:8080/api/data';

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message || 'An error occurred while fetching data');
        setLoading(false);
      });
  }, [API_URL]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV; // Use the ZIP file
    link.download = 'cv frantzi (1).zip'; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const MyList = () => {
    return (
      <ul>
        <li>
          <span>Web developer</span>
          <small>Two Years of Experience</small>
        </li>
        <li>
          <span>Android Developer</span>
          <small>Three Years of Experience</small>
        </li>
        <li>
          <span>Wordpress/WooCommerce</span>
          <small>Two Years of Experience</small>
        </li>
      </ul>
    );
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;
  if (error) return <div className="container"><p>Error: {error}</p></div>;

  return (
    <div>
      <Navigation />
   
    <div className="container mt-5">
      <h1 className="page-title mb-4">CV made using React</h1>
      <p className="small-text mb-4">This application uses React for the frontend.</p>
      <p className="small-text mb-4">It fetches and displays data from an API that I created with Node.js.</p>

      <div className="card-body text-center" style={{ color: 'white', textShadow: '1px 1px 2px black' }}>
        <h3 style={{ fontWeight: 'bold'}}>{data?.name}</h3>
        <p className="lead" style={{ fontWeight: 'bolder'}}>{data?.jobTitle}</p>
        </div>
        <section id="home">
      {/* Button for downloading ZIP */}
      <div className="text-end mb-3">
        <button className="btn" onClick={handleDownload}>
          <img src={downloadImage} width={24} alt="Download" />
        </button>
        <small className="d-block mt-1">Download my CV</small>
      </div>
</section>
      <div className="card custom-card equal-height-card" style={{ color: 'black', backgroundColor: 'black' }}>
  <div className="row mb-3">
    <div className="col-md-6 offset-md-3 d-flex align-items-center flex-column flex-md-row">
      
      {/* MyList component on the left */}
      <div className="mb-3 profile-container" style={{ marginRight: '50px', flex: '0 0 auto' }}>
        <MyList />
      </div>
   
      {/* Profile Image */}
      <div className="card-c mb-3" 
           style={{
             backgroundImage: `url(${ME})`, 
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             height: '500px', 
             borderRadius: '50px 50px 0 50px',
             flex: '1 1 auto',
             boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // Added shadow for depth
           }}>
      </div>

    </div>
  </div>
</div>

      {/* Diploma and Studies Cards (side by side) */}
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="card custom-card equal-height-card">
            <div className="card-body">
              <h5 className="card-title">Diploma</h5>
              <p className="card-text">{data.diploma}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card custom-card equal-height-card">
            <div className="card-body">
              <h5 className="card-title">Studies</h5>
              {data.studies.map((study, index) => (
                <p key={index}><strong>{study.degree}</strong> - {study.institution}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
   

      {/* Skills divided into 3 columns */}
      <div className="row mb-3">
        {Object.keys(data.skills).map((category, index) => (
          <div className="col-md-4" key={index}>
            <div className="card custom-card skill-card equal-height-card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <ul className="list-unstyled">
                  {data.skills[category].map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section id="profile">
      {/* About Me section */}
      <div className="card mb-3 custom-card equal-height-card">
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">{data.bio}</p>
        </div>
      </div>
      </section>

      {/* GitHub and LinkedIn Card */}
      <div className="card mb-3 custom-card equal-height-card">
        <div className="card-body">
          <h5 className="card-title">Social Links</h5>
          <div className="social-buttons">
                <button
                  onClick={() => window.open(data.github, "_blank")}
                  className="social-button"
                >
                  <img width="60" height="60" src={gth} alt="github" />
                </button>
               
                <button
                  onClick={() => window.open(data.linkedin, "_blank")}
                  className="social-button"
                >
                  <img src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin" />
                </button>
              </div>
          <div className="skill-card">
            <div className="social-image-container">
              <img src={SM} alt="Social Image" className="social-image" />
             
            </div>
          </div>
        </div>
      </div>

        <section id="contactDetails">
      {/* Contact Information Card */}
      <div className="card mb-3 custom-card equal-height-card">
        <div className="card-body">
          <h5 className="card-title">Contact Information</h5>
          <div className="contact-info-container">
            <div className="info-item">
              <img src={mail} alt="Email Icon" className="small-social-image" />
              <strong>Email:</strong> <span>{data.email}</span>
            </div>
            <div className="info-item">
              <img src={phone} alt="Phone Icon" className="small-social-image" />
              <strong>Phone:</strong> <span>{data.phone}</span>
            </div>
            <div className="info-item">
              <img src={location} alt="Location Icon" className="small-social-image" />
              <strong>Location:</strong> <span>{data.location}</span>
            </div>
            <img src={contact} alt="Contact Image" className="contact-image" />
          </div>
        </div>
      </div>
    </section>
{/* Carousel Card with Custom Images */}
<div className="card mb-3 custom-card">
  <div className="card-body">
    <h5 className="card-title">Image Gallery</h5>
    <div className="content-wrapper d-flex flex-column flex-md-row">
      {/* Left - Carousel */}
      <div className="phone-frame flex-grow-1">
        <div className="screen">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr1}
                alt="Image 1"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 1.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr2}
                alt="Image 2"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 2.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr2m}
                alt="Image 3"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 3.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr3}
                alt="Image 4"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 4.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr4}
                alt="Image 5"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 5.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr5}
                alt="Image 6"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 6.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={imPr6}
                alt="Image 7"
              />
              <Carousel.Caption>
                <p>This is the caption for Image 7.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Right - Description Text */}
      <div className="description-text" style={{ marginTop: '30px' }}>
        <h5 className="card-title">Code Link</h5>
        <div className="card mb-3 custom-card" style={{ margin: '20px' }}>
          <div className="d-flex justify-content-start">
            <button
              onClick={() => window.open(data.codeLink, "_blank")}
              className="custom-button"
            >
              Go to Code
            </button>
            <span className="ml-2" style={{ margin: '10px' }}>
              YOU CAN CHECK <p>THE SOURCE CODE FROM GITHUB</p>
            </span>
          </div>
        </div>
        <p style={{ margin: '20px' }}>
          Next to this, you can see a sample of my work. It is an application I developed using <span className="highlight">Android Studio</span> and <span className="highlight">Kotlin</span>. 
          To fetch the data, I used <span className="highlight">Firebase Console</span>. As you can see from the screenshots, it is a fully functional application 
          that hosts rental property listings, allowing registered users to upload their own listings. Of course, before moving 
          to production, the app would need to be enriched with more functionality and an even more refined <span className="highlight">UI</span>.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default App;