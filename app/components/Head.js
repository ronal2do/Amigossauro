import React from 'react';
import Header from './Header';
import Logo from './Logo';

class Head extends React.Component {
  render() {
    return (
      <div className="Head">
       		<div className="static">
	           <Logo />
	        </div>
       		<Header />
      </div>
    );
  }
}

export default (Head);