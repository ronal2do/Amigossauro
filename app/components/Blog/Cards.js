import React from 'react';
  const m = {
    marginBottom: '-12px'
  }
class Card extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
         <h2 className={ 'Titulo-' + this.props.classe } style={m}>{ this.props.titulo }</h2>
          <div className={ 'panel ' + this.props.classe }>
            <div className="panel-body">
              <div className="col-sm-5">
                <img src={'./images/' + this.props.src + '.png' } className="img-responsive" alt={this.props.src}/>
              </div>
              <div className="col-sm-7">
                  <p className="Paragrafo">
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