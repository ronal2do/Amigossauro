import React from 'react';

import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

import Social from '../Social';
import Box from '../Box';
import CardsGrid from './CardsGrid';
import Newsletter from '../Newsletter/Newsletter';



class Downloads extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="pull-right"> 
          <Social />
        </div>
        <div className="row">
          <Box 
            titulo="Downloads"
            src="home"
          >
            <p className="Azul">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem quo nemo illum amet molestiae accusantium suscipit, sed eligendi est, possimus incidunt totam officia non! Reprehenderit, in at saepe itaque! </p></Box>
        </div>
        <CardsGrid />
        <div className="row">
          <Newsletter className="col-sm-12" style={{padding:'0px'}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Downloads);
