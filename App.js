import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Για την αποθήκευση τυχόν σφαλμάτων
  const [loading, setLoading] = useState(true); // Για την παρακολούθηση της διαδικασίας φόρτωσης

  useEffect(() => {
    console.log('Fetching data from the API...');

    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-repo-production-cb1a.up.railway.app/api/data');
        console.log('Data fetched successfully:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        let errorMessage = 'An error occurred while fetching data.'; // Γενικό μήνυμα σφάλματος

        // Ελέγχουμε τον τύπο του σφάλματος
        if (error.response) {
          // Η αίτηση έγινε και ο server απάντησε με κατάσταση εκτός του 2xx
          errorMessage = `Error: ${error.response.status} - ${error.response.statusText}`;
        } else if (error.request) {
          // Η αίτηση έγινε αλλά δεν ελήφθη απάντηση
          errorMessage = 'Error: No response received from the server.';
        } else {
          // Κάτι συνέβη κατά τη ρύθμιση της αίτησης
          errorMessage = `Error: ${error.message}`;
        }

        setError(errorMessage); // Αποθηκεύουμε το σφάλμα
      } finally {
        setLoading(false); // Ανεξάρτητα από την έκβαση, σταματάμε την φόρτωση
      }
    };

    fetchData();
  }, []);

  if (loading) {
    console.log('Data is not yet available, loading...');
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Εμφάνιση σφάλματος αν υπάρχει
  }

  console.log('Data loaded:', data);

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
