import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Main from './Main';

const mockStore = configureMockStore();

jest.mock('./QuotesTable', () => 'QuotesTable')

describe('Main', () => {
	test('snapshot renders', () => {
		const component = renderer.create(<Main />)
		let tree = component.toJSON()

		expect(tree).toMatchSnapshot()
	})
})