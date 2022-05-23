import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LogInPage from "./components/pages/LogInPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import DashboardPage from "./components/pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
