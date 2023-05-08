import React from 'react';
import TestComponent from './components/TestComponent';
import './styles/App.scss';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      {/* Add your TestComponent here */}
      <TestComponent />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
