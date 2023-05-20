import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

  const loginRoute = <Navigate to="/login" replace />;
  const rootRoute = <Navigate to="/" replace />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job_listing" element={useProtectedRoute(<JobListing />, loginRoute)} />
        <Route path="/job_seeker" element={useProtectedRoute(<JobSeeker />, loginRoute)} />
        <Route path="/login" element={useProtectedRoute(rootRoute, <Login />)} />
        <Route path="/signup" element={useProtectedRoute(rootRoute, <SignUp />)} />
        <Route path="/messages" element={useProtectedRoute(<Messages />, loginRoute)} />
      </Routes>
    </Router>
  );
}

export default App;
