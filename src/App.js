import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList"; 
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all'
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: numberOfEvents
      });
    });
  }

  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, eventNumber);
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents  numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;