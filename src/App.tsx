import React from 'react'
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
