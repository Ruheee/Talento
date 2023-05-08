import React from "react";
import "./styles/App.scss";


import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Homepage/HomePage";
import TestComponent from "./components/TestComponent";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages"

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <HomePage /> */}
      {/* Add your TestComponent here */}
      {/* <TestComponent />
      <Login />
      <SignUp /> */}
      <Messages />
    </div>
  );
}


export default App;