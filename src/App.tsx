import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectForm } from './components/ProjectForm';
import { Resume } from './components/Resume'
import { LoginButton } from './components/LoginButton'
import {Navbar, Nav} from 'react-bootstrap'
import { Auth0Provider } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div>
       <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href='/'>DJ Bigelow</Navbar.Brand>
        <Nav >
          <Nav.Link href="/">Resume</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Item >
            <LoginButton/>
          </Nav.Item>
        </Nav>
      </Navbar>
      
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/projects/detail/:slug" component={ProjectDetails} />
              <Route exact path="/newproject" component={ProjectForm} />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
