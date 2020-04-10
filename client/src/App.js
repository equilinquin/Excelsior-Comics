import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './App.css';
import contextStore from './utils/contextStore'

function App() {

  const [user, setUser] = useState(null)
  return (
    <Router>
      <Switch>
        <contextStore.Provider value={{user:user, setUser:setUser}}>
          <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </contextStore.Provider> 
      </Switch>
    </Router>
  );
}

export default App;
