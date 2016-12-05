import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitNewsletterForm } from '../../actions/newsletter';
import Messages from '../Messages';
import Submit from './../Commons/Submit';


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
        nome: ''
      , email: ''
      , estado: ''
      , cidade: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { dispatch } = this.props
    event.preventDefault();
    dispatch(submitNewsletterForm(this.state.nome, this.state.email, this.state.estado, this.state.cidade));
    this.setState({ nome: '', email: '', estado: '', cidade: '' });
  }

  render() {
    const { messages } = this.props;

    return (
          <div className="padding-top">
            <Messages messages={ messages }/>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      name="nome"
                      className="form-control"
                      placeholder="Nome: "
                      value={this.state.nome}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className={'form-group'}>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email: "
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-6">
                      <select name="estado" id="estado" className="form-control"
                        onChange={this.handleChange}></select>
                    </div>
                    <div className="col-sm-6">
                      <select name="cidade" id="cidade" className="form-control"
                        onChange={this.handleChange}></select>
                    </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <Submit texto="Enviar" classe="newsletter"/>
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
