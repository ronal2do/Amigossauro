import React from 'react';
import { connect } from 'react-redux'
import { submitContactForm } from '../../actions/contact';
import Messages from '../Messages';
import Submit from '../Commons/Submit';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitContactForm(this.state.name, this.state.email, this.state.message));
    this.setState({ name: '', email: '', message: '' });
  }

  clearInput() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
              <form onSubmit={this.handleSubmit} className="form-horizontal">
                <div className="form-group">
                    <input type="text" name="name" placeholder="Name :" ref="name" id="name" className="form-control contato" value={this.state.name} onChange={this.handleChange} autoFocus/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email :" ref="email" id="email" className="form-control contato" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Messagem :" ref="message" id="message" rows="7" className="form-control contato" value={this.state.message} onChange={this.handleChange}></textarea>
                </div>
                <div className="form-group">
                    <Submit texto="Enviar" classe="newsletter"/>
                </div>
              </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Form);
