import React from 'react';
import FontAwesome from 'react-fontawesome';

class Social extends React.Component {
  render() {
    return (
      <div className=""> 
		<a href="https://www.facebook.com/amigossauro/" target="_blank">
	      	<span class="fa-stack fa-4x">
		      	<FontAwesome
			        className='fa-fw Icone Icone-facebook'
			        name='facebook'
			        size='2x'
		      	/>
	      	</span>
	    </a>
		<a href="https://www.youtube.com/channel/UCnBPgN6OQ1zkbYq1JAl9h2Q" target="_blank">
	      	<span class="fa-stack fa-4x">
			     <FontAwesome
			        className='fa-fw Icone Icone-instagram'
			        name='instagram'
			        size='2x'
			    />  
			</span>
	    </a>
		<a href="https://www.instagram.com/amigossauro/" target="_blank">      
		  	<span class="fa-stack fa-4x">
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