import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
         <h3 className={ 'Titulo-' + this.props.titulo }>{ this.props.titulo }</h3>
          <div className={ 'panel ' + this.props.titulo }>
            <div className="panel-body">
              <div className="col-sm-4">
                <img src={ this.props.src } className="img-responsive"/>
              </div>
              <div className="col-sm-3">
                <img src={ this.props.src } className="img-responsive"/>
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