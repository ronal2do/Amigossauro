import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Social from './Social';
import Frase from './Video/Frase';
import Videos from './Video/Videos';
import Box from './Box';
import Card from './Amizade/Cards';
import Newsletter from './Newsletter/Newsletter';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
        <div className="pull-right"> 
          <Social />
        </div>
        <div className="row">
          <Box 
            titulo="Ruaar"
            src="home"
          >
            <p className="Azul">De três ovos perdidos em uma floresta mágica, nasceram três dinossauros: o <strong>Dim</strong>, a <strong>Dana</strong> e o <strong>Deco</strong>.
            <br/>Juntos, eles descobriram o poder da amizade e hoje formam um grupo muito divertido: o <strong>Amigossauro</strong>.
            <br/>Chame todas as crianças para fazer parte dessa turma, onde a imaginação não tem limites.</p>
          </Box>
            <div className="Padding-top"></div>
            <Videos titulo="nossos vídeos"/>
        </div>
        <div className="row">
          <Frase />
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

export default connect(mapStateToProps)(Home);
