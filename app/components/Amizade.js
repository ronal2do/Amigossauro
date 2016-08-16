import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Social from './Social';
import Box from './Box';
import Card from './Amizade/Cards';
import Newsletter from './Newsletter/Newsletter';

class Amizade extends React.Component {

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
        <Messages messages={this.props.messages}/>
        <div className="pull-right"> 
          <Social />
        </div>
        <div className="row">
          <Box 
            titulo="Era da Amizade"
            src="amizade"
          >
            <p className="Azul">Na imaginação das crianças sempre existe <br /> um mundo de fantasias. <br />
              Então, na era da amizade, o <strong>Amigossauro</strong> vem para tornar esse mundo mais divertido e colorido. <br />
              Vamos conhecer todos os integrantes dessa turminha e saber qual é o seu preferido: o <strong>Dim</strong>, a <strong>Dana</strong>, o <strong>Deco</strong> ou todos!</p>
          </Box>
          <Card 
              titulo="Dim"
              src="dim"
              style={{paddingTop:'30px'}}
          >
            <p className="Paragrafo">
              O Dim é um dinossauro grandalhão,<br /> forte e muito amigo de todos.<br /> 
              Meio desastrado e atrapalhado, ele adora dançar, brincar e cantar, principalmente em sua casinha, uma caverna no meio da floresta.<br />
              Basta rugir que o Dim aparece para se divertir com todo mundo.<br /> 
              <strong>
              Ruaaarrrr!
              </strong>
            </p>
          </Card>
          <Card 
              titulo="Dana"
              src="dana"
          >
            <p className="Paragrafo">
              A menininha da turma.<br/>
              Doce e muito risonha, a Dana,<br/> meiga como sempre, adora cuidar de sua casa que é uma fofura.<br/>
              Ela mora num docinho de festa... que delícia!
              Venha se divertir com a Dana!<br/>
              Com ela, sorriso e alegria não vão faltar...  <strong><br />
              hi hi hi!
              </strong>
            </p>
          </Card>
          <Card 
              titulo="Deco"
              src="deco"
          >
            <p className="Paragrafo">
              Se você é criativo, com certeza, o Deco é o <br/>que mais se identifica com seu estilo.<br /> 
              Ele é um dinossauro desbravador<br />  e muito inteligente.<br /> 
              Sua casa, no alto de uma árvore, é também uma oficina onde ele constrói várias coisas legais.<br />
              O <strong>toc-toc</strong> do martelo é seu barulho preferido.<br /> 
              Junte-se ao Deco e descubra um mundo cheio de curiosidades.
            </p>
          </Card>
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
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Amizade);
