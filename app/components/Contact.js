import React from 'react';
import Social from './Social';
import Newsletter from './Newsletter/Newsletter';
import Frase from './Video/Frase';
import Videos from './Video/Videos';
import BoxContato from './Contato/BoxContato';
  
  const fcont = {
    fontSize:'2em'
  };
  const p = {
    fontSize:'1.2em'
  };

export default class Contact extends React.Component {

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

      if (window.matchMedia("(min-width: 1468px)").matches)  {
          scrollToY(675, 1500, 'easeInOutQuint');
          console.log('media 1468px');
      } else {
          scrollToY(475, 1500, 'easeInOutQuint');
          console.log('media 400px');
      }
      
  }

  render() {
    return (
      <div className="container">
          <div className="pull-right"> 
              <Social />
          </div>
          <div className="row">
              <BoxContato titulo="Contato">
                  
                  <p className="Azul" style={p}>
                    Dim, Dana e Deco estão aqui querendo saber a opinião de vocês.
                  </p>
                  <p className="Azul" style={p}>
                    Quer falar alguma coisa com nossa turminha?
                    É só nos mandar uma mensagem.
                  </p>
              </BoxContato>
              <Videos titulo="curtiu os nosso vídeos?"><h2 className="Frase-youtube" style={fcont}>assista mais aqui.</h2></Videos>          
          </div>
        <div className="row">
            <Frase />
            <Newsletter className="col-sm-12" style={{padding:'0px'}}/>
        </div>
      </div>

    );
  }
}
