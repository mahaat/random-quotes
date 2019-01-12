import React, { Component } from "react";

const quoteStyles = {
  color: "#222",
  textShadow: "0px 2px 3px #555",
  fontSize: "4em"
};

const authorStyles = {
  fontSize: "2em"
};
class Quote extends Component {
  render() {
    return (
      <div>
        <p style={quoteStyles}>
          It does not matter <br />
          how slowly you go <br />
          so long as you do not stop.
        </p>
        <small style={authorStyles}>Confucius</small>
      </div>
    );
  }
}

export default Quote;
