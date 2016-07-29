import React from 'react';

const data = {
  id:"VadjvlvBDxE",
  id:"hsfA4kTdltE",
  id:"c_yomf6U35A",
  id:"DfRibIkjhew"
};

var SelectedImg = React.createClass({
  render: function() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={this.props.hero}></iframe>  
      </div>
    )
  }  
});

var ImgItem = React.createClass({
  render: function() {
    return (<img src={'http://img.youtube.com/vi/' + this.props.path + '/default.jpg'} />)
  }
});

var ImgRow = React.createClass({
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
  getInitialState() {
    return {
      heroimg: '//www.youtube.com/embed/cuMezEwKFLU/',
      images: this.props.data
    }
  },
  render: function() {
    return (
      <div className="main">   
        <SelectedImg hero={this.state.heroimg} />
        <ImgRow>
          {this.state.images.map(function(image) {
              return (
                <li onClick={this.handleClick.bind(this,image.id)}>
                  <ImgItem path={image.id} />
                </li>
              )
            }, this)}
        </ImgRow>
      </div>
    );
  }
});
 
export default Youtube;