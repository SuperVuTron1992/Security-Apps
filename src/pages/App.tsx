import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Layout from "../components/Layout";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="LoginPage" />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="HomePage" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
