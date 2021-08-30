import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("textbox is rendered", () => {
      expect(NumberOfEventsWrapper.find(".number-events")).toHaveLength(1);
  });

  test("label for textbox rendered", () => {
      expect(NumberOfEventsWrapper.find(".number-label")).toHaveLength(1);
  });

  test("show 32 events by default", () => {
    expect(NumberOfEventsWrapper.find(".number-events").prop("value")).toEqual(32);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-events").prop("value")).toBe(numberOfEvents);
  });
});