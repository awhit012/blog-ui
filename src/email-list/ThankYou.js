import React, { Component } from 'react';
const logo = "/images/just-logo.png";


class BlogShow extends Component {
  constructor() {
    super();
    this.setSubscribed();
  }

  setSubscribed() {
    localStorage.setItem("isSubscribed", "yes"); 
    console.log(!!localStorage.getItem("isSubscribed"), "subscribed!");
  }

  render() {
    return (
    	<div className="container">
        <img src={logo} alt="fibroclarity logo" className="App-logo" />
  			<h2>You're Almost Done - Activate Your Subscription!</h2>
        <p>You've just been sent an email that contains a confirm link.</p>

        <p>In order to activate your subscription, check your email and click on the link in that email. You will not receive your subscription until you click that link to activate it.</p>

        <p>If you don't see that email in your inbox shortly, fill out the form again to have another copy of it sent to you.</p>
	    </div>
    );
  }
}

export default BlogShow;



