import React from 'react';

import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', estado: '', cidade: '' };
  }


  render() {
    return (
          <div className="padding-top">
            <form className="form-horizontal">
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" name="name" id="name" className="form-control" placeholder="Nome:" value={this.state.name}/>
                </div>
              </div>
              <div className="form-group">
       
                <div className="col-sm-12">
                  <input type="email" name="email" id="email" className="form-control" placeholder="E-mail:" value={this.state.email}/>
                </div>
              </div>
              <div className="form-group">
            
                <div className="col-sm-12">
                  <input type="text" name="estado" id="estado" className="form-control" placeholder="Estado:" value={this.state.estado}/>
                </div>
              </div>
             <div className="form-group">
              
                <div className="col-sm-12">
                  <input type="text" name="cidade" id="cidade" className="form-control" placeholder="Cidade:" value={this.state.cidade}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-10 col-sm-12">
                  <button type="submit" className="btn btn-success">Enviar</button>
                </div>
              </div>
            </form>
          </div>
    );
  }
}

export default (Form);