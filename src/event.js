import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false
};

handleButton = () => {
  this.setState((prevState) => ({ show: !prevState.show }));
};

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <p className="event-location">{event.location}</p>
        <p className="event-date">
          {event.start.dateTime} - {event.start.timeZone}
        </p>
        {this.state.show === true && (
          <p className="event-details">{event.description}</p>
        )}
        {this.state.show === false && (
          <button className="show-details-btn" onClick={() => this.handleButton()}>
            Show details
          </button>
        )}
        {this.state.show === true && (
          <button className="hide-details-btn" onClick={() => this.handleButton()}>
            Hide details
          </button>
        )}
      </div>
    );
  }
}
export default Event;