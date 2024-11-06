import React from 'react';
import keycloak from './keycloak';

function App() {
  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div>
      <h1>Welcome to Company</h1>
      <p>Authenticated as: {keycloak.tokenParsed?.preferred_username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
