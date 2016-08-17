import React from 'react';
import Linha from '../Commons/Linha';
import Form from './Form';

import { connect } from 'react-redux'
import Messages from '../Messages';

class BoxContato extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
      		<div className="Padding-top"></div>
          <Messages messages={this.props.messages}/>
       		<div className="col-sm-5 Box">
              <h1> {this.props.titulo} </h1>
                  {this.props.children}
       		</div>
       		<div className="col-sm-7">
       			<Form />
       		</div>
          <Linha />
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

export default connect(mapStateToProps)(BoxContato);