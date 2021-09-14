Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given the app is open
When the user views the event list
Then the event title should be shown with an option to show more details

Scenario: User can expand an event to see its details
Given that an event is listed
When the user selects view details
Then the event listing will expand to show the event details

Scenario: User can collapse an event to hide its details
Given the user has expanded the event details
When the user clicks close
Then the expanded element will collapse