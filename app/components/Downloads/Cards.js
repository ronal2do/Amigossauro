import React from 'react';
import Baixar from '../Account/Baixar';
const padding = {
  padding: '40px'
}
class Card extends React.Component {
  render() {
     
    return (
      <div className="col-sm-6">

          <div className={ ' ' + this.props.titulo }>
            <div className="panel-body">
              <div style={padding}>
                <img src={'./images/' + this.props.src + '.png' } className="img-responsive" alt={this.props.src}/>
              </div>
            
            </div>
          </div>
      </div>
    );
  }
}

export default (Card);