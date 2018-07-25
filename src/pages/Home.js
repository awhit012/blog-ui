import React, { Component } from 'react';
import './About.css';
import ReactImageFallback from "react-image-fallback";



class About extends Component {
  render() {
    return (
    <div>
	  	<h2>Welcome to Fibro Clarity!</h2>
		
		<p className="container">
			This site is not run by a medical expert, just one person who's done a ton of research and worked on his own health for several years, seeing greate improvements. 
		</p>
		<p>
			We are here to offer a different perspective on Fibromyalgia. One that is: 
	  	</p>

	  	<ul>
	  		<li>Encouraging, not discouraging</li>
	  		<li>Focused on improving health, not treating symptoms</li>
	  		<li>Embraces Dr. Robert Morse's view of Fibromyalgia as systemic acidosis</li>
	  		<li>Seeks to improve life holistically to help people change their health and their lives</li>

	  	</ul>
		
    </div>	
    
    );
  }
}

export default About;



