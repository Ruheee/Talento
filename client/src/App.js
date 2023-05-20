import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.scss";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import JobListing from './pages/JobListing';
import JobSeeker from './pages/JobSeeker';
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages";
import useProtectedRoute from "./util/useProtectedRoute";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job_listing" element={useProtectedRoute(<JobListing />)} />
        <Route path="/job_seeker" element={useProtectedRoute(<JobSeeker />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/messages" element={useProtectedRoute(<Messages />)} />
      </Routes>
    </Router>
  );
}

export default App;
