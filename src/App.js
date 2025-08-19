import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // This URL will be set on Netlify as an environment variable
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/api/data`)
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
