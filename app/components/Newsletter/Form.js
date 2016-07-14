import React from 'react';

import { connect } from 'react-redux';

class Form extends React.Component {
  componentDidMount() {
        new dgCidadesEstados({
          cidade: document.getElementById('cidade'),
          estado: document.getElementById('estado'),
          estadoVal: 'SP',
          cidadeVal: 'São Paulo'
        })
  }
  render() {
    return (
          <div className="padding-top">
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Nome:" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="email" name="email" id="email" className="form-control" placeholder="E-mail:" />
                  </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-6">
                      <select name="estado" id="estado" className="form-control"></select>
                    </div>
                    <div className="col-sm-6">
                      <select name="cidade" id="cidade" className="form-control"></select>
                    </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-success">Enviar</button>
                  </div>
                </div>
              </form>
          </div>
    );
  }
}

export default (Form);