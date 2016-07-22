import React from 'react';

export default class Submit extends React.Component {
  render() {
    return <button type="submit" className="btn btn-newsletter pull-right">{this.props.texto}</button> ;
  }
}

