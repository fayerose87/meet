import React from "react";
import { mount, shallow } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  let NumberOfEventsWrapper;

  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the event list is shown", () => {
      AppWrapper = mount(<App />);
    });
    when("a user has not specified a number of events to show", () => {
      NumberOfEventsWrapper = shallow(
        <NumberOfEvents updateEvents={() => {}} />
      );
    });
    then("32 events is the default number of events to be shown", () => {
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("that the event listed is shown", () => {
      AppWrapper = mount(<App />);
    });

    when("user specifies the number of events they want to see", () => {
      const eventObject = { target: { value: 2 } };
      AppWrapper.find(".number-events").simulate("change", eventObject);
    });

    then("the event list will show the number of events specified", () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(2);
    });
  });
});
