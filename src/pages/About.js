import React, { Component } from 'react';
import './About.css';
import ReactImageFallback from "react-image-fallback";



class About extends Component {
  render() {
    return (
    <div>
    	<h1>Welcome to Fibro Clarity!</h1>
		<h2 className="intro">I'm Alex White and I run this site. <br /> Thanks for being here!</h2>
		<ReactImageFallback className="profile-image"
            fallbackImage="/images/profile2018.png"
			src="https://lh3.googleusercontent.com/ijSTEubjL_Vs3SyZYsNnZj08pFoFJwf3zESwUiT7mk01ntsxpaFiV2vHd3IBTpU-asSbzIl2ruBA_RF63uI59g0k6eQMWQLb3W4seYFAAIjFwS-PGcjrfoq5Z7hx6QcPHBsXhXa4L8Y8BcbOPE7ozjdhfaCu3bLkQqRPaR3GRN97cfQ30U6GxGNdXjwtabdPD9-Jt-LsHY9gRm0nZy_cYsriiNmeHD6b7iHCAdSDaIlconwQSIynE7E2j2q7328SUwUr-VCClh_178rpzo7Rhvait2Ehbb4esiSyEdCeuXlHi_Ngkg8QGs5G2SMWVReObg0EqKPfoCv8X7KAbj7H6Yp0V7HjmljJfhKRordOvZKsJeEhUt6xCADG2qTyj_kB9ZG1ZiDjf32hq_1hJkpQWDNCs9d_jXw3iPVnKzRgGQFqv8H-uSQwa5muoY-8U16Q9v2aSm_zwthsZkX57KGDh68H126LexQCVwSbdZCjT67sH33sDeIpHsKzTPxmeoqh1Mw3R9AkodGwuR0DFFBXYDVtCxdP5uEc3nho3RQla5kZgyBnFWeffnaSvWWbKQopAe6MWEMPdia8vl-TD6BBsQz9u8kY5U4PhPBZ44_KxruOnPV-AWXBApz7vMlCi7aBuONyq_4-m0YxR2It2CHDnrOUVcBSFnO48A=s727-no"
			initialImage="/images/loading_icon.gif" />


		<p className="container">
			I'm not a medical expert, I'm a teacher, web developer, traveler, writer and husband. I got diagnosed with Fibromyalgia a few years ago, but have been battling severe muscle tightness and pain, digestive issues, and chronic fatigue since I was a child. 

	    	Although I'm still on my healing journey, I've learned a ton in the process, especially since I became a patient at <a href="https://www.drmorsesherbalhealthclub.com/">Dr. Robert Morse's</a> clinic. His approach to health and the human body has been a complete gamechanger for me. Between his teachings, and everything I learned in the years before, I have a wealth of knowledge I want to share with you. Given my own completely unhelpful experiences with a traditional doctor, I find the mission of sharing this information to be quite urgent. Today as I write this, I feel SO MUCH BETTER than I did just a year ago. This site is dedicated to sharing information and resources that has helped me personally with anyone else who is suffering from Fibromyalgia, Chronic Fatigue, Chronic Pain, LBS, IBS, or even people like me who have very limiting dietary restrictions. If I can help just a couple of people improve their quality of life, that's a huge win!
	  	</p>

	  	<p className="container">
			This site here to offer a different perspective on Fibromyalgia. One that is: 
	  	</p>

  		<p className="container bold">Encouraging, not discouraging</p>
  		<p className="container bold">Focused on improving health, not treating symptoms</p>
  		<p className="container bold">Embracing of Dr. Robert Morse's view of Fibromyalgia as systemic acidosis</p>
  		<p className="container bold">Seeks to improve life holistically to help people change their health and their lives</p>
	  	

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



