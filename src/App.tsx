import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectsPage } from './components/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/projects/detail/:slug" component={ProjectDetails} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
