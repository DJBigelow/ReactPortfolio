import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectForm } from './components/ProjectForm';
import { Resume } from './components/Resume'
import { LoginButton } from './components/LoginButton'
import { Navbar, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





function App() {

  return (
  
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href='/'>DJ Bigelow</Navbar.Brand>
          <Nav >
            <Nav.Link href="/">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Item >
              <LoginButton />
            </Nav.Item>
          </Nav>
        </Navbar>
  );
}

export default App;
