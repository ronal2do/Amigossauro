import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Social extends Component {
  render() {
    return (
      <div>
		<a href="https://www.facebook.com/amigossauro/" target="_blank">
	      	<span>
		      	<FontAwesome
			        className='fa-fw Icone Icone-facebook'
			        name='facebook'
			        size='2x'
		      	/>
	      	</span>
	    </a>
		<a href="https://www.instagram.com/amigossauro/" target="_blank">
		  	<span>
			  	<FontAwesome
			        className='fa-fw Icone Icone-instagram'
			        name='instagram'
			        size='2x'
		      	/>
		  </span>
	    </a>
	    <a href="https://www.youtube.com/channel/UCnBPgN6OQ1zkbYq1JAl9h2Q?sub_confirmation=1" target="_blank">
	      	<span>
  			     <FontAwesome
  			        className='fa-fw Icone Icone-youtube'
  			        name='youtube'
  			        size='2x'
  			    />
			   </span>
	    </a>
      </div>
    );
  }
}

export default (Social);
