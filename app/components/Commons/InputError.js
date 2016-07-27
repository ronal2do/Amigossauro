export default class InputError extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { message: 'INVALIDO' };
  }
    
  render(){ 
    const errorClass = classNames(this.props.className, {
      'error_container':   true,
      'visible':           this.props.visible,
      'invisible':         !this.props.visible
    });
 
    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
 
};