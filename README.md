# Meet App
A serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Features
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

## User Stories
### Filter events by city
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city. 
#### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events
#### Scenario 2: User should see a list of suggestions when they search for a city.
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed
#### Scenario 3: User can select a city from the suggested list.
- Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### Show/Hide an Event's Details
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
#### Scenario 1: An event element is collapsed by default
- Given that an event is listed
- When the user views the event list
- Then the event title should be shown with an option to show more details
#### Scenario 2: User can expand an event to see its details
- Given that an event is listed
- When the user selects "view details"
- Then the event listing will expand to show the event details
#### Scenario 3: User can collapse an event to hide its details
- Given the user has expanded the event details
- When the user clicks "close"
- Then the expanded element will collapse

### Specify Number of Events
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
#### Scenario 1: When user hasn’t specified a number, 32 is the default number
- Given a user has not specified a number of events to show
- When the event list is shown
- Then the default number of events shown will be 32
#### Scenario 2: User can change the number of events they want to see
- Given that the event listed is loaded
- When user specifies the number of events they want to see
- Then the event list will show the number of events specified

### Use the App When Offline
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
#### Scenario 1: Show cached data when there’s no internet connection
- Given there is no internet connection and the has previously used the app online
- When a user opens the app
- Then the user will be able to see a cached version of the app
#### Scenario 2: Show error when user changes the settings (city, time range)
- Given the app is being used offline and showing a cached version
- When a user changes the settings (city, time range)
- Then the app will show an error stating they are offline and need an internet connection to make changes

### Data Visualization
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
#### Scenario 1: Show a chart with the number of upcoming events in each city
- Given that events are listed
- When a user goes to the data page
- Then user can view a chart with data showing number of upcoming event in each city