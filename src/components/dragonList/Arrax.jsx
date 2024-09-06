import './All.css';
import React, { useEffect, useState } from 'react';

function Arrax () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/details/Arrax.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='stuff'>
        <img src="/images/Arrax.jpg" alt="yo" />
      <h1>Dragon Details</h1>
      <p><strong>Name:</strong> {data['Name']}</p>
      <p><strong>Hatched:</strong> {data['Hatched']}</p>
      <p><strong>Died:</strong> {data['Died']}</p>
      <p><strong>Rider(s):</strong> {data['Rider(s)']}</p>
      <p><strong>Colors:</strong> {data['Colors']}</p>
      <p><strong>Description:</strong> {data['Description']}</p>
      <p><strong>History:</strong> {data['History']}</p>
    </div>
  );
}

export default Arrax;