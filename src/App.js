import React, { useState } from 'react';

import './App.css';
import NotFound from './components/NotFound';
import InputForm from './components/InputForm';
import UserProfile from './components/UserProfile';


const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [showInputForm, setShowInputForm] = useState(true);
  const [showHeading, setShowHeading] = useState(true);
  const [showParagraph, setShowParagraph] = useState(true); // State to control visibility of the paragraph
  const [hireClicked, setHireClicked] = useState(false); // State to track if "Hire Me" button is clicked
  

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setShowInputForm(false);
        setShowHeading(false);
        setShowParagraph(false);
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
    setHireClicked(true); // Update state when the button is clicked
  };

  return (
    <div>
      {showHeading && <h1>GitHub Profile</h1>}
      {showParagraph && <p>Generate your GitHub Profile</p>} {/* Conditionally render the paragraph */}
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
