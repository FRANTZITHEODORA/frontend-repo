import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Χρήση σωστού URL ανάλογα με το περιβάλλον (localhost ή παραγωγή)
  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://myapp.railway.app/api/data'
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

  if (loading) return <div className="container"><p>Loading...</p></div>;
  if (error) return <div className="container"><p>Error: {error}</p></div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React App</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* Κάρτα για εικόνα προφίλ */}
          <div className="card mb-3 custom-card">
            <div className="card-body text-center">
              <img src={data?.image} alt="Profile" className="rounded-image mb-3" />
            </div>
          </div>

          {/* Κάρτα για κάθε πληροφορία */}
          {data && (
            <>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">{data.name}</p>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Job Title</h5>
                  <p className="card-text">{data.jobTitle}</p>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Diploma</h5>
                  <p className="card-text">{data.diploma}</p>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">{data.phone}</p>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">{data.email}</p>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Location</h5>
                  <p className="card-text">{data.location}</p>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Github</h5>
                  <a href={data.github} className="card-text" target="_blank" rel="noopener noreferrer">{data.github}</a>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">LinkedIn</h5>
                  <a href={data.linkedin} className="card-text" target="_blank" rel="noopener noreferrer">{data.linkedin}</a>
                </div>
              </div>
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Code Link</h5>
                  <a href={data.codeLink} className="card-text" target="_blank" rel="noopener noreferrer">{data.codeLink}</a>
                </div>
              </div>

              {/* Δεξιότητες */}
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Skills</h5>
                  {Object.keys(data.skills).map((category, index) => (
                    <div key={index}>
                      <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                      <ul className="list-unstyled">
                        {data.skills[category].map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Σπουδές */}
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">Studies</h5>
                  {data.studies.map((study, index) => (
                    <p key={index}><strong>{study.degree}</strong> - {study.institution}</p>
                  ))}
                </div>
              </div>

              {/* Βιογραφικό */}
              <div className="card mb-3 custom-card">
                <div className="card-body">
                  <h5 className="card-title">About Me</h5>
                  <p className="card-text">{data.bio}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
