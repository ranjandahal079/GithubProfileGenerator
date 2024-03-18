import React, { useState } from 'react';
import InputForm from './InputForm';
import UserProfile from './UserProfile';
import NotFound from './NotFound';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [showInputForm, setShowInputForm] = useState(true);
  const [showHeading, setShowHeading] = useState(true);
  const [hireClicked, setHireClicked] = useState(false); // State to track if "Hire Me" button is clicked

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setShowInputForm(false);
        setShowHeading(false);
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleHireClick = () => {
    // Action to be performed when the "Hire" button is clicked
    console.log("Hire button clicked!");
    console.log("Hire button is clicked!");
    setHireClicked(true); // Update state when the button is clicked
  };

  return (
    <div>
      {showHeading && <h1>GitHub Profile</h1>}
      <InputForm onSubmit={fetchUserData} visible={showInputForm} />
      {error ? (
        <NotFound />
      ) : user ? (
        <React.Fragment>
          <UserProfile user={user} />
          <button className="hire-button" onClick={handleHireClick}>Hire Me</button>
          {hireClicked && <p>Hire Me button clicked!</p>} {/* Display message when the button is clicked */}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default App;
