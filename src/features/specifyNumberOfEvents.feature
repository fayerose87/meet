Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the event list is shown
When a user has not specified a number of events to show
Then 32 events is the default number of events to be shown

Scenario: User can change the number of events they want to see
Given that the event listed is shown
When user specifies the number of events they want to see
Then the event list will show the number of events specified