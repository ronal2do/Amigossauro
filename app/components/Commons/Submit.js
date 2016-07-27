import React from 'react';

export default class Submit extends React.Component {
  render() {
    return <button type="submit" className={ 'btn pull-right btn-' + this.props.classe }>{this.props.texto}</button> ;
  }
}