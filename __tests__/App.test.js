/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {test} from '@jest/globals';

//to render any other UI 
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const snapshot= renderer.create(<App />).toJSON;
  console.log("abc",snapshot)
  expect(snapshot).toMatchSnapshot();
});
