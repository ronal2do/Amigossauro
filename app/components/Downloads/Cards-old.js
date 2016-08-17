import React from 'react';
import Baixar from '../Account/Baixar';

export default class Card extends React.Component {
  render() {
     
    return (
      <div className="col-sm-4">
         <h3 className={ 'Titulo-' + this.props.titulo + ' text-center' } style={{backgroundColor:'transparent'}}>{ this.props.titulo }</h3>
          <div className={ this.props.titulo } style={{backgroundColor:'transparent'}}>
            <div className="text-center">
                <img src={'/images/' + this.props.src + '.png' } className="img-responsive img-rounded" alt={this.props.src}/>
                {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}