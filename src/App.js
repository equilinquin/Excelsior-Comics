import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Signup} />
    </Router>
  );
}

export default App;
