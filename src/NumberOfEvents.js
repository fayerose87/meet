import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (e) => {
    const value = e.target.value;
    
    this.setState({
        numberOfEvents: value
    });
    this.props.updateNumberOfEvents(value);
}

render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="NumberOfEvents">
        <label className="number-label">Select Number of Events</label>
        <input
         type='number' 
         id='number-of-events' 
         className='number-events' 
         value={numberOfEvents}
         onChange={(e) => this.handleInputChanged(e)} 
         placeholder={numberOfEvents}
        />
      </div>
    );
  }
}
export default NumberOfEvents;