import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Site from './components/Site';
import Home from './components/Home';
import Contact from './components/Contact';
import Amizade from './components/Amizade';
import Teste from './components/Dashboard/Teste';
import Downloads from './components/Downloads/';
import Dashboard from './components/Dashboard/';
import Blog from './components/Blog/';
import NotFound from './components/NotFound';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import Profile from './components/Account/Profile';
import Forgot from './components/Account/Forgot';
import Reset from './components/Account/Reset';

export default function getRoutes(store) {
  const ensureAuthenticated = (nextState, replace) => {
    if (!store.getState().auth.token) {
      replace('/login');
    }
  };
  const skipIfAuthenticated = (nextState, replace) => {
    if (store.getState().auth.token) {
      replace('/');
    }
  };
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  return (
    <Route component={Site}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onLeave={clearMessages}/>
        <Route path="/contato" component={Contact} onLeave={clearMessages}/>
        <Route path="/amizade" component={Amizade} onLeave={clearMessages}/>
        <Route path="/downloads" component={Downloads} onLeave={clearMessages}/>
        <Route path="/blog" component={Blog} onLeave={clearMessages}/>
        <Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path="/account" component={Profile} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
        <Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path='/reset/:token' component={Reset} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
      </Route>
      <Route path="/dashboard" component={Dashboard} onEnter={ensureAuthenticated} onLeave={clearMessages}>
         <Route path="/" component={Teste} />
      </Route>
      <Route path="*" component={NotFound} onLeave={clearMessages}/>
    </Route>
  );
}
