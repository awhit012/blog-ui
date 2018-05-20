import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './About.css';
import ReactImageFallback from "react-image-fallback";



class About extends Component {
  render() {
    return (
    <div>
    	<Jumbotron className="jumbo">
			<ReactImageFallback className="profile-image"
				src="/images/profile2018.png"
  				initialImage="/images/loading_icon.gif" />
		  	<h2>Welcome to Fibro Warrior!</h2>
		</Jumbotron>

			<p className="container">
		    	Hi! I'm Alex White. I got diagnosed with Fibromyalgia a few years ago, but have been battling it since I was a child. 

		    	It's been quite the journy and I've learned a ton. Although I still have daily pain and fatigue, through research, and working with doctors and nutritionists, I've been able improve my quality of life drastically. These conditions are still poorly understood, and it can be hard to find quality informaion. This site is dedicated to sharing information and resources that has helped me personally with anyone else who is suffering from Fibromyalgia, Chronic Fatigue, Chronic Pain, LBS, IBS, or even people like me who have very limiting dietary restrictions. If I can help just a couple of people improve their quality of life, that's a huge win!
		  	</p>

			<h2>How it works</h2>
			
			<p className="container">
				To pay the bills and support what I'm doing, I use <a href="https://affiliate-program.amazon.com/">Amazon Affiliate Marketing</a> links. If you click through a link on our site, and buy it on Amazon.com, you pay the same low price as always, and we recieve a modest commision for bringing customers to Amazon. 
			</p>

			<p className="container jumbo-bottom">
				Because I live with Fibromyalgia every day, it is important to me that this site not just provide free, quality information, but also give back monetarily. That's why I donate 5% of our commisions to <a href="http://www.afsafund.org/">The American Fibromyalgia Syndrome Association</a>.
			</p>
    </div>	
    
    );
  }
}

export default About;



