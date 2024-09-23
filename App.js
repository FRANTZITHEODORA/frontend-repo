import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/data') // Θύρα 5000
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>{data.name}</h1>
      <p><strong>Job Title:</strong> {data.jobTitle}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <img src={data.image} alt="profile" />
      <p><strong>Bio:</strong> {data.bio}</p>
      <h3>Skills:</h3>
      <div>
        <h4>Web Development:</h4>
        <ul>
          {data.skills.Web Development.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <h4>UX/UI Design:</h4>
        <ul>
          {data.skills['UX/UI Design'].map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <h4>Other Skills:</h4>
        <ul>
          {data.skills['Other Skills'].map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <h3>Studies:</h3>
      <ul>
        {data.studies.map(study => (
          <li key={study.degree}>{study.degree} - {study.institution}</li>
        ))}
      </ul>
      <p><strong>GitHub:</strong> <a href={data.github}>{data.github}</a></p>
      <p><strong>LinkedIn:</strong> <a href={data.linkedin}>{data.linkedin}</a></p>
      <p><strong>Code Link:</strong> <a href={data.codeLink}>{data.codeLink}</a></p>
    </div>
  );
}

export default App;

