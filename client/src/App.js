import React from 'react';
import TestComponent from './components/TestComponent';
import './styles/App.scss';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Messages from './pages/Messages'

function App() {
  return (
    <div className="App">
      {/* Add your TestComponent here */}
      <TestComponent />
      <LogIn />
      <SignUp />
      <Messages /> 
    </div>
  );
}

export default App;
