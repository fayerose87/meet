import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <label className="number-label">Select Number of Events</label>
        <input
          type="number"
          className="number-events"
          value={numberOfEvents}
          placeholder="#"
        />
      </div>
    );
  }
}
export default NumberOfEvents;