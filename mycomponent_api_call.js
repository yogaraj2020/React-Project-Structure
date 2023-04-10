import React, { useState, useEffect } from 'react';
import { getService, postService } from './services';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getService('/myApiEndpoint');
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const result = await postService('/myApiEndpoint', formData);
      setData(result);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyComponent;
