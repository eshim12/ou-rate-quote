import React from 'react';
import App from './App';

import { shallow } from 'enzyme'

describe('App', () => {
 	test("renders without crashing", () => {
  		shallow(<App />);
	});
});