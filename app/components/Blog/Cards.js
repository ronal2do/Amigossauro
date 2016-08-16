import React from 'react';
  const m = {
    marginBottom: '-12px'
  }
  const t = {
    textAlign: 'left'
  }

class Card extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
          <div className={ 'panel ' + this.props.classe }>
            <div className="panel-body">
              <div className="col-sm-4">
                <img src={'./images/' + this.props.src + '.png' } className="img-responsive" alt={this.props.src}/>
              </div>
              <div className="col-sm-8" style={t}>
                  <h2 className={ 'Titulo-' + this.props.classe } style={m, t}>{ this.props.titulo }</h2>
                  <p className="Paragrafo" style={t}>
                    { this.props.texto }
                  </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default (Card);