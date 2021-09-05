import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateNumberOfEvents(value);   
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label className="number-label">Select Number of Events</label>
        <input
          type="number"
          id='number-of-events'
          className="number-events"
          value={numberOfEvents}
          placeholder="#"
          value={this.state.numberOfEvents}
          onChange = {this.handleInputChanged}
        />
      </div>
    );
  }
}
export default NumberOfEvents;