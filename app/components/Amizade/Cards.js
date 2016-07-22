import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
         <h2 className={ 'Titulo-' + this.props.titulo }>{ this.props.titulo }</h2>
          <div className={ 'panel ' + this.props.titulo }>
            <div className="panel-body">
              <div className="col-sm-4">
                <img src={'./images/' + this.props.src + '.png' } className="img-responsive" alt={this.props.src}/>
              </div>
              <div className="col-sm-3">
                <img src={'./images/' + this.props.src + '-casa.png' } className="img-responsive" alt={this.props.src}/>
              </div>
              <div className="col-sm-5 text-right">
                  <p>{ this.props.texto }</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default (Card);