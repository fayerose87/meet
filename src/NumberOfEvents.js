import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32,
    errorText:''
  };

  handleInputChanged = (e) => {
    const value = e.target.value;

    if (value < 1 || value > 32) {
        this.setState({
            numberOfEvents: '',
            errorText: 'Enter a number between 1 and 32.',
        });
    } else {
        this.setState({
            numberOfEvents: value,
            errorText: '',
        });
        this.props.updateNumberOfEvents(value);
    }
}

render() {
  const { numberOfEvents } = this.state;
    return (
      <div className="NumberOfEvents">
        <label className="number-label">Select Number of Events to View:</label>
        <input
         type='number' 
         id='number-of-events' 
         className='number-events' 
         value={numberOfEvents}
         onChange={this.handleInputChanged}
         placeholder={numberOfEvents}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;