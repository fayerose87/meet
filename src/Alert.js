import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.background = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      background: this.background,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "black";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "white";
    this.background = "#006c9a";
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };
