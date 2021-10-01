import React, { Component } from "react";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import "./App.css";
import EventList from "./EventList"; 
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import logo from './devmeet_logo.png';
import header from './header_image.jpg';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all',
    showWelcomeScreen: undefined,
    showHide : false
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}


  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, numberOfEvents), 
            locations: extractLocations(events) });
        }

      if (!navigator.onLine) {
        this.setState({
          offlineAlert:
            'Offline mode. To view the most current information, please connect to the internet.',
        });
      } else {
        this.setState({
          offlineAlert: '',
        });
      }
    });
  }}

  componentWillUnmount(){
    this.mounted = false;
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    const { offlineAlert } = this.state;

    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
       <Navbar className="nav" expand="lg" bg="light" variant="light">
         <Container className="justify-content-between">
           <Navbar.Brand className="mx-auto mx-lg-0" href="/">
             <img
              alt="devMeet logo"
              src={logo}
              width="100%"
              height="35px"
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

      <OfflineAlert text={offlineAlert}/>

      <Container>

      <h1 className="font-weight-bold">Welcome, Developers!</h1>
      <div className="introduction">
        <p>Find an event near you and meet other developers, make friends, find support, grow a business, or explore your interests. Interested in which cities have the most events?
       <a className="font-weight-bold chart-link" onClick={() => this.handleModalShowHide()}> Check out this chart!</a></p>
        <Modal size="lg" show={this.state.showHide}>
        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Number of Events by City</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <ResponsiveContainer height={200} >
            <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#006c9a" />
            </ScatterChart>
          </ResponsiveContainer>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

          <h2 className="font-weight-bold">Upcoming Events</h2>
          <EventList events={this.state.events}/>
          <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
        </Container>

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;