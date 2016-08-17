import React from 'react';

import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

import Social from '../Social';
import Box from './Box';
import Card from './Cards-old';
import Newsletter from '../Newsletter/Newsletter';
import Baixar from '../Account/Baixar';



class Single extends React.Component {
  
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
    const Botoes = [
      {file:"papertoy_deco",name:"Paper Toy Deco",src:"circulo-deco"},
      {file:"papertoy_dana",name:"Paper Toy Dana",src:"circulo-dana"},
      {file:"papertoy_dim",name:"Paper Toy Dim",src:"circulo-dim"}
    ].map((Botoes, i) =>  
        <Card 
          key={i}
          titulo={Botoes.name}
          texto="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet."
          src={Botoes.src}
        >
          <Baixar file={Botoes.file} />
        </Card>);

    return (
      <div className="container">
        <div className="pull-right"> 
          <Social />
        </div>
        <div className="row">
          <Box 
            titulo="Paper Toys"
            src="papertoy"
          >
            <p className="Azul"> 
             Agora você poder brincar com os três dinossauros mais animados do planeta! Se cadastre, faça o download do Paper Toy, siga as instruções de montagem e se divirta pra valer com o Dim, a Dana e o Deco.
            </p>
          </Box>
        </div>
        <div className="row">
       {Botoes}
      </div>
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

export default connect(mapStateToProps)(Single);
