import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Homepage/HomePage";
import "./styles/App.scss";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Login />
      <SignUp /> 
    </div>
  );
}

export default App;
