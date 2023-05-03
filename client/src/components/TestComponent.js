import React, { useEffect, useState } from 'react';

function TestComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://localhost:8000/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default TestComponent;
