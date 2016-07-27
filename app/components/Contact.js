import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
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

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="pull-right"> 
              <Social />
          </div>
          <div className="row">
              <Messages messages={this.props.messages}/>
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);
