import React from 'react';
import Head from './Head';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
