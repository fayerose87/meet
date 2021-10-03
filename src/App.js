import React, { Component } from "react";
import { Container, Navbar, Accordion } from "react-bootstrap";
import "./App.css";
import EventList from "./EventList"; 
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from './EventGenre';
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
    currentLocation: 'all cities',
    showWelcomeScreen: undefined,
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
      const locationEvents = (location === 'all cities')
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

      
        <h1 className="font-weight-bold">Welcome, Developers! We&apos;re glad you&apos;re here!</h1>
        <p>Find an event near you and meet other developers, make friends, find support, grow a business, or explore your interests. There&apos;s something for every kind of developer, including: React, JavaScript, Node, jQuery, and Angular JS.</p>
        <p>Interested in which cities have the most events? Or what types of events are the most popular? Check out the charts below.</p>
        
      <Accordion>
        <Accordion.Item eventKey="0" flush>
           <Accordion.Header>Number of Events by City</Accordion.Header>
              <Accordion.Body>
                 <p>Number of events in {this.state.currentLocation}</p>
                 <ResponsiveContainer height={400} >
                  <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis type="number" dataKey="number" name="number of events" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={this.getData()} fill="#006c9a" />
                  </ScatterChart>
                </ResponsiveContainer>
              </Accordion.Body>
        </Accordion.Item>
        
         <Accordion.Item eventKey="1" flush>
          <Accordion.Header>Most Popular Types of Events</Accordion.Header>
            <Accordion.Body>
              <p>Most popular events in {this.state.currentLocation}</p>
              <EventGenre events={this.state.events} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

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