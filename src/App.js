import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Listivity from './pages/listivity';
import LittleGems from './pages/littlegems';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/listivity">
          <Listivity />
        </Route>

        <Route exact path="/littlegems">
          <LittleGems />
        </Route>

      </Switch>

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

    </Router>
  );
}

export default App;
