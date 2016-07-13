import React from 'react';
import { IndexLink } from 'react-router';

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
       	<IndexLink to="/" className="navbar-brand">Amigossauro</IndexLink>
       	<br/ >
      </div>
    );
  }
}

export default (Logo);