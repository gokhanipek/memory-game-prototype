import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CardGame from './components/CardGame/CardGame';
import Home from './components/Home/Home';
import Result from './components/Result/Result';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/play">Play Anonymously</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/play">
            <CardGame />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}