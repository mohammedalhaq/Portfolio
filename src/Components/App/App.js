import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";
import Nav from '../Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
