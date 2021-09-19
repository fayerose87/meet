import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import EventList from "./EventList"; 
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import logo from './devmeet_logo.png';
import header from './header_image.jpg';

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
       <Navbar className="nav" expand="lg" bg="light" variant="light">
         <Container className="justify-content-between">
           <Navbar.Brand className="mx-auto mx-lg-0" href="/">
             <img
              alt="devMeet logo"
              src={logo}
              width="183px"
              height="30px"
              className="d-inline-block"/>
            </Navbar.Brand>
             <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} events={this.state.events}/>
          </Container>
      </Navbar>
      <img 
        alt="header"
        src={header}
        width="100%"
        height="100%"
        className="d-inline-block align-top"/>

        <Container fluid>
          <EventList events={this.state.events}/>
          <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
        </Container>
      </div>
    );
  }
}

export default App;