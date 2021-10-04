import React, { Component } from "react";
import moment from 'moment';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class Event extends Component {
  state = {
    show: false
};

handleButton = () => {
  this.setState((prevState) => ({ show: !prevState.show }));
};

render() {
  const { event } = this.props;

  const eventStart = moment(event.start.dateTime).format("MMMM Do YYYY, HH:mm a")

  return (
    <Container className="event-listings">
    <div className="event">
      <h3 className="event-title font-weight-bold">{event.summary}</h3>
      <p className="event-date font-weight-bold">{`${eventStart}`}</p>
      <p className="event-location text-muted">{event.location}</p>
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
    </Container>
  );
}
}
export default Event;