import React from 'react';

  const m = {
    marginBottom: '-12px',
    fontSize: '37px'
  }
  const p = {
    padding: '4px'
  }

class Card extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
         <h2 className={ 'Titulo-' + this.props.titulo } style={m}>{ this.props.titulo }</h2>
          <div className={ 'panel ' + this.props.titulo }>
            <div className="panel-body">
              <div className="col-sm-4" style={p}>

                <img src={'./images/' + this.props.src + '.png' } 
                     className="img-responsive" 
                     alt={this.props.src}
                     style={{marginLeft:'0px'}}
                     />
              </div>

              <div className="col-sm-3" style={p}>
                <img src={'./images/' + this.props.src + '-casa.png' } 
                     className="img-responsive" 
                     alt={this.props.src}
                     style={{marginLeft:'0px'}}
                     />
              </div>

              <div className="col-sm-5" style={{padding:'0px'}}>
                  { this.props.children }
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default (Card);