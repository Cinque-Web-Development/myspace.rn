import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
    <Router>
      <NavBar />
    </Router>
  </>
  );
}
