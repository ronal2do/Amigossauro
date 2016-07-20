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
            texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, repellendus adipisci dolore officia aut voluptatum ullam. <bold>Accusamus</bold> ducimus voluptatem dolor et autem illo veniam culpa hic repudiandae, iusto nulla quo."
            foto="http://placehold.it/250x250"
          />
          <Videos />          

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
