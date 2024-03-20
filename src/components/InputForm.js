// InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onSubmit, visible }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default InputForm;
