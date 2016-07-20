import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Social from './Social';
import Box from './Box';
import Card from './Amizade/Cards';
import Newsletter from './Newsletter/Newsletter';

class Amizade extends React.Component {
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
            texto={[
                    "This ", <strong>negrito</strong>, " working! " , <br /> , 
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, repellendus adipisci dolore officia aut voluptatum ullam. Accusamus ducimus voluptatem dolor et autem illo veniam culpa hic repudiandae, iusto nulla quo."
                    ]}
            src="dim"
          />
          <Card 
              titulo="Dim"
              texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quos cupiditate facilis magni laboriosam adipisci voluptates laborum deserunt distinctio modi incidunt ratione nam ad, dolores ducimus vel libero sit, error."
              src="dim"
          />
          <Card 
              titulo="Dana"
              texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsa, vel distinctio voluptatem expedita aspernatur obcaecati ducimus sint, nulla ad, totam dolores eveniet sed nesciunt porro in mollitia, necessitatibus! Ipsum."
              src="dana"
          />
          <Card 
              titulo="Deco"
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Amizade);
