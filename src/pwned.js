import React from "react";
import "./pwned.css";
import meme from "./cheers.jpg";
import Home from "./home";

const Pwned = props => {
  if (props.clicked == true) {
    return (
      <div className="page">
        <h1 className="pwtitle">You have fallen for a phishing test.</h1>
        <div className="phish-container">
          <p className="fallen">
            Hackers would now have access to your GitHub account
          </p>
          <img className="cheers" src={meme} />
          <p className="credentials">Your email/username: {props.email}</p>
          <p className="credentials">Your password is: {props.password}</p>

          <p className="how">How can I be safer online?</p>
          <p className="instruction">
            1. Always check the webpage url, does it look genuine?
          </p>
          <p className="instruction">
            2. Never open websites or attachments from an email that aren't from
            a trusted source or that you haven't run through anti-virus software
            first.
          </p>
          <p className="instruction">
            3. Ensure your anti-virus, anti-spam and device software is all kept
            up to date.
          </p>
          <p className="instruction">
            4. Never enter personal information into a site you don't know or
            can't trust
          </p>
          <p className="instruction">
            5. If you have fallen for a phishing email always tell the IT
            department, they can help protect your data and stop further attacks
            from happening.
          </p>

          <p className="change">
            Please follow these rules and change your password!
          </p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const page = document.getElementsByClassName("page");

export default Pwned;
