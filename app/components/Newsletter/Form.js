import React from 'react';
import { connect } from 'react-redux'
import { submitNewsletterForm } from '../../actions/newsletter';
import Messages from '../Messages';

import Submit from './../commons/Submit';

class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { nome: '', email: '', estado: '', cidade: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
        new dgCidadesEstados({
          cidade: document.getElementById('cidade'),
          estado: document.getElementById('estado'),
          estadoVal: '',
          cidadeVal: ''
        })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitNewsletterForm(this.state.nome, this.state.email, this.state.estado, this.state.cidade));
    console.log("Enviado");
  }

  render() {
    return (
          <div className="padding-top">
            <Messages messages={this.props.messages}/>
              <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input 
                      type="text"
                      name="nome"
                      className="form-control" 
                      id="nome"
                      valor={"nome"}
                      placeholder={"Nome: "}
                      value={this.state.nome} 
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input 
                      type="email"
                      name="email"
                      className="form-control" 
                      id="email"
                      valor={"email"}
                      placeholder={"E-mail: "}
                      value={this.state.email} 
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-6">
                      <select name="estado" id="estado" className="form-control"
                        onChange={this.handleChange.bind(this)}></select>
                    </div>
                    <div className="col-sm-6">
                      <select name="cidade" id="cidade" className="form-control" 
                        onChange={this.handleChange.bind(this)}></select>
                    </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <Submit texto="Enviar" />
                  </div>
                </div>
              </form>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Form);