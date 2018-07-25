import React, { Component } from 'react';
import './About.css';
import ReactImageFallback from "react-image-fallback";



class About extends Component {
  render() {
    return (
    <div>
	  	<h2>About Fibro Clarity!</h2>
		<ReactImageFallback className="profile-image"
            fallbackImage="/images/profile2018.png"
			src="/images/profile2018.png"
				initialImage="/images/loading_icon.gif" />

		<p className="container">
	    	Hi! I'm Alex White. I'm a teacher, web developer, traveler, writer and husband. I got diagnosed with Fibromyalgia a few years ago, but have been battling muscle tightness and pain, digestive issues, and chronic fatigue since I was a child. 

	    	Although I'm still on my healing journey, I've learned a ton in the process, especially since I became a patient at <a href="https://www.drmorsesherbalhealthclub.com/">Dr. Robert Morse's</a> clinic. His approach to health and the human body has been a complete gamechanger for me. Between his teachings, and everything I learned in the years before, I have a wealth of knowledge I want to share with you. Given my own completely unhelpful experiences with a traditional doctor, I find the mission of sharing this information to be quite urgent. Today as I write this, I feel SO MUCH BETTER than I did just a year ago. This site is dedicated to sharing information and resources that has helped me personally with anyone else who is suffering from Fibromyalgia, Chronic Fatigue, Chronic Pain, LBS, IBS, or even people like me who have very limiting dietary restrictions. If I can help just a couple of people improve their quality of life, that's a huge win!
	  	</p>

		<h2>How it works</h2>
		
		<p className="container">
			This site is, and always will be, free and open to the public. To pay the bills and support what I'm doing, I use <a href="https://affiliate-program.amazon.com/">Amazon Affiliate Marketing</a> links. If you click through a link on our site, and buy something on Amazon.com, you pay the same low price as always, and we recieve a modest commision for bringing customers to Amazon! 
		</p>

		<p className="container jumbo-bottom">
			Because I know what it is to live with Fibromyalgia, it is important to me that this site not just provide free, quality information, but also give back monetarily. That's why I donate 5% of our commisions to <a href="http://www.afsafund.org/">The American Fibromyalgia Syndrome Association</a>.
		</p>
    </div>	
    
    );
  }
}

export default About;



