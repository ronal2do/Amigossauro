import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Site from './components/Site';
import Home from './components/Home';
import Politica from './components/Politica';
import Contact from './components/Contact';
import Amizade from './components/Amizade';
import HomeDash from './components/Dashboard/Home';
import Downloads from './components/Downloads/Index';
import Jogos from './components/Downloads/Single';
import Colorir from './components/Downloads/Colorir';
import Single from './components/Blog/Single';
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
        <Route path="/downloads/papertoy" component={Jogos} onLeave={clearMessages}/>
        <Route path="/downloads/colorir" component={Colorir} onLeave={clearMessages}/>
        <Route path="blog/single" component={Single} onLeave={clearMessages}/>
        <Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path="/account" component={Profile} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
        <Route path="/forgot" component={Forgot} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path='/reset/:token' component={Reset} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
        <Route path="/politicas" component={Politica} onLeave={clearMessages}/>
        <Route path="*" component={NotFound} onLeave={clearMessages}/>
      </Route>
    </Route>
  );
}
