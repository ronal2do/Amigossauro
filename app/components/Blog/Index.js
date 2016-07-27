import React from 'react';

import Social from '../Social';
import Box from '../Box';
import Newsletter from '../Newsletter/Newsletter';
import Card from './Cards';

export default class Blog extends React.Component {
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
