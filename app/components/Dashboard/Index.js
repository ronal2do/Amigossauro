import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';
import { facebookLogin, twitterLogin, googleLogin, vkLogin, githubLogin } from '../../actions/oauth';
import Messages from '../Messages';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="login-container container">
        <p className="text-center">
         Painel
        </p>
      </div>
    );
  }
}

export default (Dashboard);
