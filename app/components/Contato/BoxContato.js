import React from 'react';
import Linha from '../commons/Linha';
import Form from './Form';

class BoxContato extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
      		<div className="Padding-top"></div>
       		<div className="col-sm-5">
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

export default (BoxContato);