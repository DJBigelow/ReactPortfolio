import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectForm } from './components/ProjectForm';
import { Resume } from './components/Resume'
import { LoginButton } from './components/LoginButton'
import { LogOutButton } from './components/LogoutButton'
import {Navbar, Nav} from 'react-bootstrap'
import { Auth0Provider } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <Auth0Provider 
      domain="dev-6w9to6yp.us.auth0.com" 
      clientId="0tyOZYxuKqSjrgSLPjtyB0EZVikW3qza"
      redirectUri={window.location.origin}>
       <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href='/'>DJ Bigelow</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Resume</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <LoginButton/>
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
    </Auth0Provider>
  );
}

export default App;
