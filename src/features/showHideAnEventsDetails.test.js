import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the app is open', () => {
      AppWrapper = mount(<App />);
    });
    when('the user views the event list', () => {
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });
    then('the event title should be shown with an option to show more details', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('that an event is listed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
    when('the user selects view details', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
      EventWrapper.find('.show-details-btn').simulate('click');
    });
    then('the event listing will expand to show the event details', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user has expanded the event details', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });
    when('the user clicks close', () => {
      EventWrapper.find('.hide-details-btn').simulate('click');
    });
    then('the expanded element will collapse', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });
  });

});