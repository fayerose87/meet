import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("Event title is shown", () => {
    expect(EventWrapper.find(".event-title")).toHaveLength(1);
  });

  test("Location is shown", () => {
    expect(EventWrapper.find(".event-location")).toHaveLength(1);
  });

  test("Date and time are shown", () => {
    expect(EventWrapper.find(".event-date")).toHaveLength(1);
  });

  test("show more button is visible", () => {
    expect(EventWrapper.find(".show-details-btn")).toHaveLength(1);
  });

 test("change show-state on click", () => {
   EventWrapper.setState({
     show: false,
    });
    EventWrapper.find(".show-details-btn").simulate("click");
    expect(EventWrapper.state("show")).toBe(true);
  });

  test("hide details by default", () => {
    EventWrapper.setState({ 
        show: false,
    });
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
  })

  test("show details on click", () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find(".show-details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
  });

  test("hide details on click", () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find(".hide-details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
  });
});