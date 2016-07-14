import React from 'react';
import FontAwesome from 'react-fontawesome';
var Facebook = {
	  margin: '10px 5px',
	  color: 'white',
	  padding: '5px 10px',
	  borderRadius: '100px',
	  WebkitTransition: 'all', // note the capital 'W' here
	  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
	  shadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
	  backgroundColor: 'blue'
 };
 var Instagram = {
	  margin: '10px 5px',
	  color: 'white',
	  padding: '5px 6px',
	  borderRadius: '100px',
	  WebkitTransition: 'all', // note the capital 'W' here
	  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
	  shadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
	  backgroundColor: 'purple'
 };
var Youtube = {
	  margin: '10px 5px',
	  color: 'white',
	  padding: '5px 6px',
	  borderRadius: '100px',
	  WebkitTransition: 'all', // note the capital 'W' here
	  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
	  shadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
	  backgroundColor: 'red'
 };

class Social extends React.Component {
  render() {
    return (
      <div className=""> 
		<a href="https://www.facebook.com/amigossauro/" target="_blank">
	      	<span class="fa-stack fa-4x">
		      	<FontAwesome
			        className='fa-fw'
			        name='facebook'
			        size='2x'
			        style={Facebook}
		      	/>
	      	</span>
	    </a>
		<a href="https://www.youtube.com/channel/UCnBPgN6OQ1zkbYq1JAl9h2Q" target="_blank">
	      	<span class="fa-stack fa-4x">
			     <FontAwesome
			        className='fa-fw'
			        name='instagram'
			        size='2x'
			        style={Instagram}
			    />  
			</span>
	    </a>
		<a href="https://www.instagram.com/amigossauro/" target="_blank">      
		  	<span class="fa-stack fa-4x">
			  	<FontAwesome
			        className='fa-fw'
			        name='youtube'
			        size='2x'
			        style={Youtube}
		      	/>
		  </span>
	    </a>
      </div>
    );
  }
}

export default (Social);