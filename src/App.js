import React, { Component } from 'react';

import './App.css';
import { Route, Switch, Redirect ,BrowserRouter} from "react-router-dom";
import Home from  './pages/home/Home'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/" exact>
        <Home id={0} />
      </Route>
      <Route path="/about" exact>
      <Home id={1} />
      </Route>
      <Route path="/projects">
      <Projects id={3} />
      </Route>
      <Route path="/service">
      <Home id={2} />
      </Route>
      <Route path="/contact">
      <Contact id={5}/>
      </Route>
      <Route path="/career">
      <Home id={4}/>
      </Route>
      <Redirect to="/"/>
</Switch>
</BrowserRouter>
    );
  }
}

export default App;
