import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectForm } from './components/ProjectForm';
import { Resume } from './components/Resume'
import { EditProjectForm } from './components/EditProjectForm';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Auth0Provider domain={process.env.REACT_APP_DOMAIN}
                       clientId={process.env.REACT_APP_CLIENT_ID}
                       redirectUri={window.location.origin}>

        <App />

        <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/" component={Resume} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/projects/detail/:slug" component={ProjectDetails} />
                <Route exact path="/newproject" component={ProjectForm} />
                <Route exact path="/projects/edit/:slug" component={EditProjectForm} />
              </Switch>
            </header>
          </div>
        </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
