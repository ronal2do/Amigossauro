import React from 'react';
import Baixar from '../Account/Baixar';

class Card extends React.Component {
  render() {
     
    return (
      <div className="col-sm-6">
         <h3 className={ 'Titulo-' + this.props.titulo }>{ this.props.titulo }</h3>
          <div className={ 'panel ' + this.props.titulo }>
            <div className="panel-body">
              <div className="col-sm-6">
                <img src={'./images/' + this.props.src + '.png' } className="img-responsive" alt={this.props.src}/>
              </div>
              <div className="col-sm-6 text-right">
                  <p className="text-left">{ this.props.texto }</p>
                 {this.props.children}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default (Card);