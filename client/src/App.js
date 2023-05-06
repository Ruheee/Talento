import React from 'react';
import TestComponent from './components/TestComponent';
import './styles/App.scss';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      {/* Add your TestComponent here */}
      <TestComponent />
      <LogIn />
    </div>
  );
}

export default App;
