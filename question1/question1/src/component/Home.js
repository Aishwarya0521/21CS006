import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:9876/numbers/{$data}'); 
        setData(response.data);
      } catch (e) {
        console.error('Error fetching data:', e.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h2>Previous State:</h2>
          <pre>{JSON.stringify(data.windowPrevState, null, 2)}</pre>
          <h2>Current State:</h2>
          <pre>{JSON.stringify(data.windowCurrState, null, 2)}</pre>
          <h2>Numbers:</h2>
          <pre>{JSON.stringify(data.numbers, null, 2)}</pre>
          <h2>Average:</h2>
          <p>{data.avg}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
