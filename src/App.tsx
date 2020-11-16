import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectsPage } from './components/ProjectsPage';
import { Resume } from './components/Resume'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
       <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href='/'>DJ Bigelow</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Resume</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar>
      
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/projects/detail/:slug" component={ProjectDetails} />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
