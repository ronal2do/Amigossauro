import React from 'react';
import { render } from 'react-dom';

data = [{"id":"VadjvlvBDxE"},{"id":"hsfA4kTdltE"},{"id":"c_yomf6U35A"},{"id":"DfRibIkjhew"}];

var selectedImg = React.createClass({
  render: function() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={this.props.hero}></iframe>  
      </div>
    )
  }  
});

var imgItem = React.createClass({
  render: function() {
    return (<img src={'http://img.youtube.com/vi/' + this.props.path + '/default.jpg'} />)
  }
});

var imgRow = React.createClass({
  render: function() {
    return (
      <div className="img-row">
        <ul>
            {this.props.children}
        </ul>
      </div>
    )
  }
});

var Youtube = React.createClass({
  handleClick: function(imageid) {
    var image = '//www.youtube.com/embed/' + imageid; 
    this.setState({heroimg: image});
  },
  getInitialState: function() {
    return {
      heroimg: '//www.youtube.com/embed/cuMezEwKFLU/',
      images: this.props.data
    }
  },
  render: function() {
    return (
      <div className="main">   
        <selectedImg hero={this.state.heroimg} />
        <imgRow>
          {this.state.images.map(function(image) {
              return (
                <li onClick={this.handleClick.bind(this,image.id)}>
                  <imgItem path={image.id} />
                </li>
              )
            }, this)}
        </imgRow>
      </div>
    );
  }
});
 
export default (Youtube);