import React from 'react';

import Social from '../Social';
import Box from '../Box';
import Newsletter from '../Newsletter/Newsletter';
import Card from './Cards';



export default class Blog extends React.Component {

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
            titulo="Blog"
            src="home"
          >
            <p className="Azul">De três ovos perdidos em uma floresta mágica, nasceram três dinossauros: o <strong>Dim</strong>, a <strong>Dana</strong> e o <strong>Deco</strong>.
            <br/>Juntos, eles descobriram o poder da amizade e hoje formam um grupo muito divertido: o <strong>Amigossauro</strong>.
            <br/>Chame todas as crianças para fazer parte dessa turma, onde a imaginação não tem limites.</p>
          </Box>
          <Card 
              titulo="Hora do banho"
              classe="Dim"
              texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quos cupiditate facilis magni laboriosam adipisci voluptates laborum deserunt distinctio modi incidunt ratione nam ad, dolores ducimus vel libero sit, error."
              src="dim"
          />
          <Card 
              titulo=" Inclusão social"
              classe="Dana"
              texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsa, vel distinctio voluptatem expedita aspernatur obcaecati ducimus sint, nulla ad, totam dolores eveniet sed nesciunt porro in mollitia, necessitatibus! Ipsum."
              src="dana"
          />
          <Card 
              titulo="VOlta às aulas"
              classe="Deco"
              texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nisi, commodi omnis illo ipsum tenetur ullam aut id tempore assumenda dolorum ex repellendus reiciendis quisquam voluptates vero, fuga, libero cum."
              src="deco"
          />
        </div>
          <div className="row">
            <Newsletter className="col-sm-12" style={{padding:'0px'}}/>
          </div>
        </div>

    );
  }
}
