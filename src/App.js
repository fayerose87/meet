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
      const locationEvents = (location === 'all')
      ?
        events.slice(0, numberOfEvents)
      :
        events.filter((event) => event.location === location);
        this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentLocation: location,
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
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ 
        events: events.slice(0, numberOfEvents), 
        locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
         <h1 className="title">
          Meet App
        </h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} events={this.state.events}/>
        <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;