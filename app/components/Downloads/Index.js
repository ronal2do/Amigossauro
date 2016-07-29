import React from 'react';

import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

import Social from '../Social';
import Box from '../Box';
import CardsGrid from './CardsGrid';
import Newsletter from '../Newsletter/Newsletter';



class Downloads extends React.Component {
  
  componentDidMount() {
      window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                  window.setTimeout(callback, 1000 / 60);
                };
      })();
      function scrollToY(scrollTargetY, speed, easing) {
          // scrollTargetY: the target scrollY property of the window
          // speed: time in pixels per second
          // easing: easing equation to use

          var scrollY = window.scrollY,
              scrollTargetY = scrollTargetY || 0,
              speed = speed || 2000,
              easing = easing || 'easeOutSine',
              currentTime = 0;

          // min time .1, max time .8 seconds
          var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

          // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
          var PI_D2 = Math.PI / 2,
              easingEquations = {
                  easeOutSine: function (pos) {
                      return Math.sin(pos * (Math.PI / 2));
                  },
                  easeInOutSine: function (pos) {
                      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                  },
                  easeInOutQuint: function (pos) {
                      if ((pos /= 0.5) < 1) {
                          return 0.5 * Math.pow(pos, 5);
                      }
                      return 0.5 * (Math.pow((pos - 2), 5) + 2);
                  }
              };

          // add animation loop
          function tick() {
              currentTime += 1 / 60;

              var p = currentTime / time;
              var t = easingEquations[easing](p);

              if (p < 1) {
                  requestAnimFrame(tick);

                  window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
              } else {
                  window.scrollTo(0, scrollTargetY);
              }
          }

          // call it once to get started
          tick();
      }
      scrollToY(475, 1500, 'easeInOutQuint');
  }

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
